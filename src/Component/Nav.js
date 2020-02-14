import React from "react";
import "../Pages/Main.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="navbar">
          <div className="main_logo">
            <div className="logo_iconBox">
              <img
                className="logo_icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
                alt="instagramLogo"
              />
            </div>
            <div className="logo_line"></div>
            <div clss="log_letterBox">
              <img className="textlogo" src="img/logo_text.png" alt="textlog" />
            </div>
          </div>
          <div className="search">
            <input type="text" placeholder="검색" />
          </div>
          <div className="rightmenu">
            <div className="rightBox">
              <div className="searchIcon">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt=""
                />
              </div>
              <div className="heartIcon">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt=""
                />
              </div>
              <div className="myPageIcon">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
