import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { uploadToCloudinary } from "../utils/cloudinaryUpload";

export default function QuestionForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");
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

    await addDoc(collection(db, "questions"), {
      title,
      description: desc,
      tag,
      imageUrl,
      date: serverTimestamp(),
      type: "question",
    });

    alert("✅ Question posted successfully!");
    setTitle("");
    setDesc("");
    setTag("");
    setFile(null);
    setUploadProgress(0);
    setLoading(false);
  };

  return (
    <div className="post-form">
      <h2>Post a Question</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Question Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Describe your question..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tag (e.g., React, Firebase)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        {uploadProgress > 0 && <p>Uploading: {uploadProgress}%</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post Question"}
        </button>
      </form>
    </div>
  );
}
