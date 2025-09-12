import React from "react";

export default function ProblemInput({ value, onChange }) {
  return (
    <textarea
      name="problem"
      placeholder="Describe your problem"
      value={value}
      onChange={onChange}
      required
    />
  );
}
