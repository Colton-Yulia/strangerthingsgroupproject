import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../api-adapters";

const SinglePost = ({ allPosts, setAllPosts }) => {
  const [content, setContent] = useState("");
  const [singleFilteredPost, setSingleFilteredPost] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const handleDeletePost = async (e) => {
    try {
      await deletePost(e);
      const updatedAllPostList = allPosts.filter((e) => {
        if (e._id !== id) {
          return true;
        }
      });
      setAllPosts(updatedAllPostList);
      navigate("/posts");
    } catch (error) {
      console.log(error);
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

  const handleUpdate = props.allPosts.filter((singlePost) => {
    if (singlePost.allPosts == id) {
      return singlePost;
    }
  })[0];

  const sendPutRequest = async (e) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${e.target.value}`, {
        method: "PUT",
        // Ask about bearer tokens
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN_STRING}`,
        },
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver,
          },
        }),
      });
      const result = await response.json();

      const updatedAllPostList = props.post.filter((singlePost) => {
        if (singlePost._id !== id) {
          return singleFilteredPost;
        }
      });

      const newUpdatedAllPost = [...updatedAllPostList, result];
      props.setReview(newUpdatedAllPost);
      // console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

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
            <button onClick={handleDeletePost} value={singleFilteredPost._id}>
              Delete Post
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
