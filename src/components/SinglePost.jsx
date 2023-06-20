import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postMessage } from "../api-adapters";

const SinglePost = ({ allPosts }) => {
  const { id } = useParams();
  const [singleFilteredPost, setSingleFilteredPost] = useState(null);
  console.log(_id);

  const sendMessage = async () => {
    try {
      const result = await postMessage(content);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

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

              <li>
                Messages:{" "}
                {singleFilteredPost.messages.length !== 0
                  ? "new messages"
                  : "no new messages"}
              </li>
              <li>
                Is Currently Active:{" "}
                {singleFilteredPost.active ? "Active" : "Inactive"}
              </li>
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <label>
                Send Message:
                <input
                  type="text"
                  placeholder="Enter Message"
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </label>
              <button type="submit" className="loginBtn">
                Submit
              </button>
            </form>
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

export default SinglePost;
