import React, { useState } from "react";
import "./newPost.css";

const NewPost = ({ isLoggedIn }) => {
  const [location, setLocation] = useState("");
  const [delivery, setDelivery] = useState(null);
  const [messages, setMessages] = useState("");
  const [active, setActive] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      {
        isLoggedIn === true ? handleSubmit() : "Please create a profile";
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="new-post-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="location">
            {" "}
            Location:
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="delivery">
            {" "}
            Delivery:
            <select
              type="select"
              name="delivery"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
            >
              <option value="Yes">No</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="messages">
            {" "}
            Messages:
            <input
              type="text"
              name="messages"
              value={messages}
              onChange={(e) => setMessages(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="active">
            {" "}
            Active:
            <input
              type="text"
              name="active"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <button type="submit" className="submitPost">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
