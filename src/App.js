import React from "react";

import Header from "./components/Header";
import PostList from './components/PostList';

import "./styles/reset.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <PostList />
    </div>
  );
}

export default App;
