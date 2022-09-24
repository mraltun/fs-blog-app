import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <div id='page-body'>
        <HomePage />
        <AboutPage />
        <ArticlePage />
        <ArticlesListPage />
      </div>
    </div>
  );
};

export default App;
