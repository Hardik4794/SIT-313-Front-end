import React from "react";
import Header from "./Header";
import Image from "./Image";
import FeaturedArticles from "./FeaturedArticles";
import FeaturedTutorials from "./FeaturedTutorials";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Image />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
