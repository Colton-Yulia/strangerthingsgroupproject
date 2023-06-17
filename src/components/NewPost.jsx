import React, { useState } from "react";
import "./newPost.css";

const NewPost = () => {
  const [location, setLocation] = useState("");
  const [delivery, setDelivery] = useState("");
  const [messages, setMessages] = useState("");
  const [active, setActive] = useState("");
  const COHORT_NAME = "2209-FTB-ET-WEB-FT";
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const handleSubmit = async (e) => {
    console.log(BASE_URL);

    e.preventDefault();
    try {
      const newPost = { location, delivery, messages, active };
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN_STRING_HERE}`,
        },
        body: JSON.stringify({ post: newPost }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="location">
            {" "}
            Location:
            <input
              type="text"
              name="location"
              // value={location}
              // onChange={EventTarget.value}
            ></input>
          </label>
        </div>
        <div>
          <label for="delivery">
            {" "}
            Delivery:
            <input
              type="text"
              name="delivery"
              // value={delivery}
              // onChange={EventTarget.value}
            ></input>
          </label>
        </div>
        <div>
          {/* create ternary to indicate messages available */}
          <label for="messages">
            {" "}
            Messages:
            <input
              type="text"
              name="messages"
              // value={messages}
              // onChange={EventTarget.value}
            ></input>
          </label>
        </div>
        <div>
          <label for="active">
            {" "}
            Active:
            <input
              type="text"
              name="active"
              // value={active}
              // onChange={EventTarget.value}
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
