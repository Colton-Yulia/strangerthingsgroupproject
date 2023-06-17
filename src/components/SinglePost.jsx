import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./singlePost.css";
import "./generalStyles.css";

const SinglePostView = ({ allPosts }) => {
  const { id } = useParams();
  const [singleFilteredPost, setSingleFilteredPost] = useState(null);
  console.log(id);

  useEffect(() => {
    const filteredPost = allPosts.find((singlePostIdentity) => {
      if (singlePostIdentity._id === id) {
        return true;
      }
    });

    if (filteredPost) {
      setSingleFilteredPost(filteredPost);
    } else {
      setSingleFilteredPost(null);
    }
  }, [allPosts]);
  console.log(singleFilteredPost);
  return (
    <div>
      <div className="single-post-body">
        {singleFilteredPost && singleFilteredPost._id ? (
          <div className="singlePost">
            <ul>
              <li>Location: {singleFilteredPost.location}</li>
              <li>Delivery: {singleFilteredPost.willDeliver ? "Yes" : "No"}</li>

              {/* map through array */}
              {/* <li>Messages: {singleFilteredPost.messages}</li> */}
              <li>
                Is Currently Active:{" "}
                {singleFilteredPost.active ? "Active" : "Inactive"}
              </li>
            </ul>
            <button>
              <Link to="/newpost">Create New Post</Link>
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SinglePostView;
