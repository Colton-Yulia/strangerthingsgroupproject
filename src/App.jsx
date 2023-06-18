import { useState, useEffect } from "react";
import "./App.css";
import PostsList from "./components/PostsList";
import { Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import NavBar from "./components/NavBar";
import NewPost from "./components/NewPost";
import HomePage from "./components/HomePage";
// import Login from "./components/Login";
// import Register from "./components/Register";

function App() {
  const COHORT_NAME = "2209-FTB-ET-WEB-FT";
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
  const [allPosts, setAllPosts] = useState([]);

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
  }, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/posts" element={<PostsList allPosts={allPosts} />} />
        <Route path="/newpost" element={<NewPost />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route
          path="/singlepost/:id"
          element={<SinglePost allPosts={allPosts} />}
        />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/singlepost"
          element={<SinglePost allPosts={allPosts} />}
        />
      </Routes>
    </div>
  );
}

export default App;
