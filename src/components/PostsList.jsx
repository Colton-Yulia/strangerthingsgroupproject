import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { deletePost } from "../api-adapters";
// import { SearchBar } from "./SearchBar";

import "./postList.css";

const PostsList = () => {
  const COHORT_NAME = "2304-FTB-ET-WEB-FT";
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
  const [allPosts, setAllPosts] = useState([]);
  const [removePostRequest, setRemovePostRequest] = useState([]);
  const removePost = deletePost();

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
      <div className="post-list-body">
        {allPosts.length ? (
          allPosts.map((singlePost) => {
            console.log(singlePost);
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
                <button>
                  singlepost
                  <Link to="/singlepost/:id" />
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
