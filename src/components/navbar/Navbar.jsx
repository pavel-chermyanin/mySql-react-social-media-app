import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useRef } from "react";

const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const [isDropMenu, setDropMenu] = useState(false);
  const [isSearchMobile, setSearchMobile] = useState(false);
  const searchRef = useRef();
  const dropMenuRef = useRef();
  const activeDrop = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => setDropMenu(false));

    return () => window.removeEventListener("resize", () => setDropMenu(false));
  }, []);

  useEffect(() => {
    const handleMenuDrop = (e) => {
      if (
        !activeDrop?.current?.contains(e.target) &&
        !dropMenuRef?.current?.contains(e.target)
      ) {
       setDropMenu(false);
      } 
    };
    window.addEventListener("click", handleMenuDrop);

    return () => {
      window.removeEventListener("click", handleMenuDrop);
    };
  }, [isDropMenu]);

  const handleSearchDrop = async () => {
    await setSearchMobile((prev) => !prev);
    searchRef?.current?.focus();
  };

  return (
    <div className="navbar">
      <div className="left">
        {!isSearchMobile && (
          <>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>pavelsocial</span>
            </Link>
            <HomeOutlinedIcon />
            {darkMode ? (
              <WbSunnyOutlinedIcon onClick={toggle} />
            ) : (
              <DarkModeOutlinedIcon onClick={toggle} />
            )}
            <GridViewOutlinedIcon />
          </>
        )}

        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>

        {!isSearchMobile ? (
          <div className="mobile-search">
            <SearchOutlinedIcon onClick={handleSearchDrop} />
          </div>
        ) : (
          <div className="search-drop">
            <SearchOutlinedIcon onClick={handleSearchDrop} />
            <input
              type="text"
              placeholder="Search..."
              ref={searchRef}
              onBlur={() => {
                setSearchMobile((prev) => !prev);
              }}
            />
          </div>
        )}
      </div>

      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div
          className="user"
          onClick={(e) => {
            if (
              activeDrop?.current?.contains(e.target) &&
              !dropMenuRef?.current?.contains(e.target)
            ) {
              setDropMenu((prev) => !prev);
            }
          }}
          ref={activeDrop}
        >
          <img src={currentUser.profilePicture} alt="" />
          <span>{currentUser.name}</span>

          {isDropMenu && (
            <div
              className="mobile-menu"
              tabIndex={1}
              ref={dropMenuRef}
              // onFocus={() => {
              //   setDropMenu(true);
              // }}
              // onBlur={() => setDropMenu(false)}
            >
              <div className="mobile-menu__item">
                <NotificationsOutlinedIcon />
                <span>Notifications</span>
              </div>
              <div className="mobile-menu__item">
                <EmailOutlinedIcon />
                <span>Emails</span>
              </div>
              <div className="mobile-menu__item">
                <PersonOutlinedIcon />
                <span>{currentUser.name}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
