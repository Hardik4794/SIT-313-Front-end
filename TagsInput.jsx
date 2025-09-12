import React from "react";

export default function TagsInput({ value, onChange, postType }) {
  return (
    <input
      type="text"
      name="tags"
      placeholder={`Please add up to 3 tags to describe what your ${postType} is about e.g., Java`}
      value={value}
      onChange={onChange}
    />
  );
}
