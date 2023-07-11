import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { deletePost, postMessage } from "../api-adapters";

const SinglePost = ({ allPosts }) => {
  const [singleFilteredPost, setSingleFilteredPost] = useState(null);
  const { id } = useParams();
  console.log(id);

  const sendMessage = async () => {
    try {
      const result = await postMessage(content);
      // console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const filteredPost = allPosts.find((e) => {
      if (e._id === id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(filteredPost);

    if (filteredPost) {
      setSingleFilteredPost(filteredPost);
    } else {
      setSingleFilteredPost(null);
    }
  }, [allPosts]);

  // console.log(singleFilteredPost);
  return (
    <div>
      <div className="single-post-body">
        {singleFilteredPost ? (
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
            <button onClick={deletePost} value={allPosts.id}></button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
