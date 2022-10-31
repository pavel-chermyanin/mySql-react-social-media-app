import React from "react";
import "./profile.scss";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://avatars.mds.yandex.net/i?id=db2133ddf14c0cd5706f5aa7fd28757b-4456735-images-thumbs&n=13"
          alt=""
          className="cover"
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=d7401eceeae47bec10e3cf6fad91da29-3751006-images-thumbs&n=13"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="small" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="small" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>pavel.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>

    </div>
  );
};

export default Profile;
