import { useState, useEffect } from "react";
import "./App.css";
import PostsList from "./components/PostsList";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import NewPost from "./components/NewPost";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  const COHORT_NAME = "2304-FTB-ET-WEB-FT";
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      setIsLoggedIn(true);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/posts`);
        const translatedData = await res.json();
        setAllPosts(translatedData.data.posts);
        console.log(translatedData.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/posts" element={<PostsList allPosts={allPosts} />} />
        <Route path="/newpost" element={<NewPost isLoggedIn={isLoggedIn} />} />

        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />

      </Routes>
    </div>
  );
}

export default App;
