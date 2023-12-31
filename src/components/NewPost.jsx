import React, { useState } from "react";
import { newPost } from "../api-adapters";
import "./newPost.css";

const NewPost = ({ setIsLoggedIn }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await newPost(
        title,
        description,
        price,
        location,
        willDeliver
      );
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="new-post-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value), console.log(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="price">
            Price:
            <input
              type="text"
              name="price"
              value={price}
              pattern="[0-9]+"
              onChange={(e) => {
                setPrice(e.target.value), console.log(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="location">
            Location:
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => {
                console.log(e.target.value);
                setLocation(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="willDeliver">
            Will Deliver:
            <label>Yes</label>
            <input
              type="radio"
              name="willDeliver"
              value={true}
              onChange={(e) => {
                setWillDeliver(e.target.value);
              }}
            ></input>
            <label>No</label>
            <input
              type="radio"
              name="willDeliver"
              value={false}
              onChange={(e) => {
                setWillDeliver(e.target.value);
              }}
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
