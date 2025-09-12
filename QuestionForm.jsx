import React from "react";
import TitleInput from "./TitleInput";
import ProblemInput from "./ProblemInput";

export default function QuestionForm({ formData, handleChange }) {
  return (
    <>
      <TitleInput
        value={formData.title}
        onChange={handleChange}
        placeholder="Start your question with how, what, why, etc."
      />
      <ProblemInput value={formData.problem} onChange={handleChange} />
    </>
  );
}
