import React from "react";

export default function TitleInput({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      name="title"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
}
