import React, { useEffect, useState } from "react";

import { postMessage } from "../api-adapters";

const Profile = () => {
  const [profileData, setProfileData] = useState();
  const username = localStorage.getItem("username");
  const [content, setContent] = useState("");

  const myData = async () => {
    const API_URL =
      "https://strangers-things.herokuapp.com/api/2304-FTB-PT-WEB-FT";
    try {
      const response = await fetch(`${API_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await response.json();
      // console.log(result.data);
      setProfileData(result.data);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    myData();
  }, []);

  return (
    <div className="profile-box">
      <h1 className="display-profile">Welcome!</h1>
      <h3 className="messages">Messages</h3>

      <div id="emptyMessages"> No Messages to Display</div>

      <h2 className="messages">Messages Sent</h2>
    </div>
  );
};

export default Profile;
