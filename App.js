import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import QuestionForm from "./Components/QuestionForm";
import ArticleForm from "./Components/ArticleForm";
import FindQuestions from "./Pages/FindQuestions";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<QuestionForm />} />
          <Route path="/articles" element={<ArticleForm />} />
          <Route path="/find" element={<FindQuestions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
