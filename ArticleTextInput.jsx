import React from "react";

export default function ArticleTextInput({ value, onChange }) {
  return (
    <textarea
      name="articleText"
      placeholder="Enter full article text"
      value={value}
      onChange={onChange}
      required
    />
  );
}
