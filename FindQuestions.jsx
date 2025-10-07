import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function FindQuestions() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "questions"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
    });
    return () => unsubscribe();
  }, []);

  const filtered = posts.filter((post) => {
    return (
      (!search ||
        post.title.toLowerCase().includes(search.toLowerCase())) &&
      (!tagFilter ||
        post.tag.toLowerCase().includes(tagFilter.toLowerCase()))
    );
  });

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deleteDoc(doc(db, "questions", id));
    }
  };

  return (
    <div className="find-questions">
      <h2>Find Posts</h2>
      <input
        type="text"
        placeholder="Search by Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by Tag"
        value={tagFilter}
        onChange={(e) => setTagFilter(e.target.value)}
      />

      <div className="card-list">
        {filtered.map((post) => (
          <div key={post.id} className="card">
            <h3>{post.title}</h3>
            <p>
              <strong>Tag:</strong> {post.tag}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {post.date?.toDate
                ? post.date.toDate().toLocaleString()
                : ""}
            </p>
            {post.imageUrl && (
              <img src={post.imageUrl} alt="question" width="150" />
            )}
            <button onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}>
              {expandedId === post.id ? "Hide Details" : "View Details"}
            </button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>

            {expandedId === post.id && (
              <div className="details">
                <p>{post.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
