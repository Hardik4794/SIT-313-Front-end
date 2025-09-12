import React from "react";

export default function PostTypeSelector({ postType, setPostType }) {
  return (
    <>
      <label>
        <input
          type="radio"
          value="question"
          checked={postType === "question"}
          onChange={() => setPostType("question")}
        />
        Question
      </label>
      <label style={{ marginLeft: "15px" }}>
        <input
          type="radio"
          value="article"
          checked={postType === "article"}
          onChange={() => setPostType("article")}
        />
        Article
      </label>
    </>
  );
}
