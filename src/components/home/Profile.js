import React from "react";
import "./profile.css";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="mailto:aspoorna24@gmail.com">
              <i className="fa fa-envelope-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/poorna-a-s-3760641a2/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/aspoorna24">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter-square"></i>
            </a>
            </div>
           
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Poorna</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                Software Engineer 💻{" "}
               
              </h1>
              <span className="profile-role-tagline">
                {" "}
                Innovative Software Engineer driving solutions with expertise
                and passion.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="A_S_Poorna_Resume.pdf" download="ASPoorna_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
