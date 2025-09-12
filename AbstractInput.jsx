import React from "react";

export default function AbstractInput({ value, onChange }) {
  return (
    <input
      type="text"
      name="abstract"
      placeholder="Enter a 1-paragraph abstract"
      value={value}
      onChange={onChange}
      required
    />
  );
}