import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { deletePost } from "../api-adapters";

import { SearchBar } from "./SearchBar";

import "./postList.css";

const PostsList = ({ allPosts }) => {
  const COHORT_NAME = "2304-FTB-ET-WEB-FT";
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
  const [Posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/posts`);
        const translatedData = await res.json();
        console.log(translatedData);
        setPosts(translatedData.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const deletePostById = allPosts.find((e) => {
      if (e._id === id) {
        return true;
      } else {
        return false;
      }
    });
    if (deletePostById) {
      setPosts(null);
    }
  }, [allPosts]);

  let filteredPosts = Posts.filter((post) => {
    let postTitleToLowerCase = post.title.toLowerCase();
    let searchQuery = searchTerm.toLowerCase();
    if (postTitleToLowerCase.includes(searchQuery)) {
      return post;
    }
  });

  return (
    <div>
      <form>
        <label htmlFor="post"></label>
        <input
          id="search"
          name="search-query"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
      </form>
      <div className="post-list-body">
        {filteredPosts.length ? (
          filteredPosts.map((singlePost) => {
            // console.log(singlePost);
            return (
              <div key={singlePost._id} className="posts-list">
                <ul>
                  <li>Title: {singlePost.title}</li>
                  <li>Author: {singlePost.username}</li>
                  <li>Location: {singlePost.price}</li>
                </ul>
                <button onClick={(e) => deletePostById}>Delete Post</button>
                <Link to={`/post/${singlePost.id}`}>
                  <button onClick={() => console.log("test")}>More info</button>
                </Link>
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
