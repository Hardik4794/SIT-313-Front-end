import React, { useState } from "react";
import PostTypeSelector from "./PostTypeSelector";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";
import TagsInput from "./TagsInput";
import PostButton from "./PostButton";
import "./NewPost.css";

export default function NewPost() {
  const [postType, setPostType] = useState("question");
  const [formData, setFormData] = useState({
    title: "",
    problem: "",
    abstract: "",
    articleText: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { postType, ...formData });
    alert("Form submitted! (Data logged in console, not saved yet)");
  };

  return (
    <div className="new-post-container">
      <h2>New Post</h2>

      <div className="post-type">
        <PostTypeSelector postType={postType} setPostType={setPostType} />
      </div>

      <form onSubmit={handleSubmit}>
        <p className="info-text">
          This section is designed based on the type of the post. It could be
          developed by conditional rendering.{" "}
          <span>
            For post a {postType}, the following section would be appeared.
          </span>
        </p>

        {postType === "question" ? (
          <QuestionForm formData={formData} handleChange={handleChange} />
        ) : (
          <ArticleForm formData={formData} handleChange={handleChange} />
        )}

        <TagsInput
          value={formData.tags}
          onChange={handleChange}
          postType={postType}
        />

        <PostButton />
      </form>
    </div>
  );
}
