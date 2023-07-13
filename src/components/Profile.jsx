import React, { useEffect, useState } from "react";
import { myData } from "../api-adapters";

const Profile = ({ allPosts }) => {
  const [profileData, setProfileData] = useState("");
  const username = localStorage.getItem("username");

  useEffect(() => {
    const getMyData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const renderUser = await myData(token);
          console.log(renderUser);
          setProfileData(renderUser.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getMyData();
  }, []);

  return (
    <div className="profile-box">
      <h1 className="display-profile">Welcome!</h1>
      <h3 className="messages"></h3>
      <div id="emptyMessages">{profileData.username} test</div>
      <h3 className="messages">{profileData.messages}</h3>
      <h2 className="messages">Messages Sent</h2>
    </div>
  );
};

export default Profile;
