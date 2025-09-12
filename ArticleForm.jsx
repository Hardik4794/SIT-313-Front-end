import React from "react";
import TitleInput from "./TitleInput";
import AbstractInput from "./AbstractInput";
import ArticleTextInput from "./ArticleTextInput";

export default function ArticleForm({ formData, handleChange }) {
  return (
    <>
      <TitleInput
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter a descriptive title"
      />
      <AbstractInput value={formData.abstract} onChange={handleChange} />
      <ArticleTextInput value={formData.articleText} onChange={handleChange} />
    </>
  );
}
