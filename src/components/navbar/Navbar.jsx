import { useContext } from "react";
import {
  SearchOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  SegmentOutlined,
  LightMode,
} from "@mui/icons-material";

import { DarkModeContext } from "../../context/darkModeContext";

import "./navbar.scss";

const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input placeholder="Search ..." type="text" />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            {darkMode ? (
              <LightMode
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <DarkModeOutlined
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <SegmentOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://photosbook.in/wp-content/uploads/cute-girl-pic15.jpg"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
