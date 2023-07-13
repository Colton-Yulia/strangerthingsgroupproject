import { useState } from "react";
import { useParams } from "react-router-dom";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const TOKEN_STRING = localStorage.getItem("token");

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    // console.log(result, "result");
    return result.data;
  } catch (error) {
    console.log(error);
  }
  return;
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    // console.log(result, "result");
    return result.data;
  } catch (error) {
    console.log(error);
  }
  return;
};

export const newPost = async (
  title,
  description,
  price,
  location,
  willDeliver
) => {
  try {
    const TOKEN_STRING = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING}`,
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
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = async (e) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${e.target.value}`, {
      method: "DELETE",
      // Ask about bearer tokens
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING}`,
      },
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const postMessage = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING}`,
      },
      body: JSON.stringify({
        message: {
          content: "",
        },
      }),
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const myData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
