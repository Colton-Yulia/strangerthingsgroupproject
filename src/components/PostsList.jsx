import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { deletePost } from "../api-adapters";

import { SearchBar } from "./SearchBar";

import "./postList.css";

const PostsList = () => {
  const COHORT_NAME = "2304-FTB-ET-WEB-FT";
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
  const [allPosts, setAllPosts] = useState([]);

  const changeHandler = async (e) => {
    // e.preventDefault()
    try {
      const result = await deletePost(id);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/posts`);
        const translatedData = await res.json();
        setAllPosts(translatedData.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <SearchBar allPosts={allPosts} />
      <div className="post-list-body">
        {allPosts.length ? (
          allPosts.map((singlePost) => {
            // console.log(singlePost);
            return (
              <div key={singlePost._id} className="posts-list">
                <ul>
                  <li>Author: {singlePost.username}</li>
                  <li>Location: {singlePost.location}</li>

                  <li>Delivery: {singlePost.willDeliver ? "Yes" : "No"}</li>

                  <li>
                    Messages:{" "}
                    {singlePost.messages.length !== 0
                      ? `${singlePost.messages}`
                      : "no new messages"}
                  </li>
                  <li>
                    Is Currently Active:{" "}
                    {singlePost.active ? "Active" : "Inactive"}
                  </li>
                </ul>
                <button onClick={(e) => changeHandler}>Delete Post</button>
                <button onClick={() => console.log("test")}>
                  singlepost
                  <Link to="/singlepost" />
                </button>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PostsList;
