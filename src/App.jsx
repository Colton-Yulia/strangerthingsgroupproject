import { useState, useEffect } from "react";
import "./App.css";
import PostsList from "./components/PostsList";
import { Routes, Route } from "react-router-dom";

function App() {
  const COHORT_NAME = "2304-FTB-ET-WEB-FT";
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
    <>
      <Routes>
        <Route path="/" element={<PostsList allPosts={allPosts} />} />
      </Routes>
    </>
  );
}

export default App;
