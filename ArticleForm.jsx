import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { uploadToCloudinary } from "../utils/cloudinaryUpload";

export default function ArticleForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = "";
    if (file) {
      imageUrl = await uploadToCloudinary(file, setUploadProgress);
    }

    await addDoc(collection(db, "articles"), {
      title,
      content,
      author,
      imageUrl,
      date: serverTimestamp(),
      type: "article",
    });

    alert("✅ Article posted successfully!");
    setTitle("");
    setContent("");
    setAuthor("");
    setFile(null);
    setUploadProgress(0);
    setLoading(false);
  };

  return (
    <div className="post-form">
      <h2>Post an Article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your article content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ minHeight: "150px" }}
        />
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        {uploadProgress > 0 && <p>Uploading: {uploadProgress}%</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post Article"}
        </button>
      </form>
    </div>
  );
}
