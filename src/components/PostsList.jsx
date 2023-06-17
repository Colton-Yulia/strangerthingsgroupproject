import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./generalStyles.css";
import "./postList.css";

const PostsList = () => {
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
      <div className="post-list-body">
        {allPosts.length ? (
          allPosts.map((singlePost) => {
            return (
              <div key={singlePost._id} className="posts-list">
                <ul>
                  <li>Location: {singlePost.location}</li>
                  <Link to={`/SinglePost/${singlePost._id}`}>More Details</Link>
                </ul>
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
