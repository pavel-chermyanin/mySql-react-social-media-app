import "./leftbar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect, useRef } from "react";
import { setOpenLeftbar } from "../../store/openLeftbar";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);
  const leftbarRef = useRef();
  const { isOpenLeftbar } = useSelector((state) => state.openLeftbar);
  const dispatch = useDispatch();

  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  // if (isSmallScreen) {
  //   dispatch(setOpenLeftbar(false));
  //   console.log("less 768px");
  // }
  // if (isSmallScreen) {
  //   dispatch(setOpenLeftbar(false));
  //   console.log("less 768px");
  // }
  // console.log(isOpenLeftbar);
  useEffect(() => {
    // leftbarRef.current.focus();
    // dispatch(() => setOpenLeftbar(true));
    // leftbarRef.current.style.transform = "translateX(-150%)";
  }, [isOpenLeftbar]);

  useEffect(() => {
    const handleClick = (e) => {
      if (!leftbarRef.current.contains(e.target)) {
        dispatch(setOpenLeftbar(false));
      }
    };
    window.addEventListener("click", handleClick);
    
    return () => window.removeEventListener("click", handleClick);
  }, []);
  
  useEffect(() => {
    const handleResize = (e) => {
      console.log("!");
      // if(isOpenLeftbar) {
        dispatch(setOpenLeftbar(false));
      // }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const handleOnBlur = () => {
    // dispatch(setOpenLeftbar());
    //   handleTranslate();
    //   setTimeout(() => {
    //     dispatch(setOpenLeftbar(false));
    //   }, 30);
  };
  const handleMenu = () => {};
  return (
    <div
      className="leftbar"
      ref={leftbarRef}
      tabIndex={1}
      style={{
        transform:
          (isOpenLeftbar && isSmallScreen) || isBigScreen
            ? // (!isBigScreen && isOpenLeftbar)
              "translateX(0)"
            : "translateX(-150%)",
      }}
      // onFocus={(e) => {
      //   leftbarRef.current.style.transform = "translateX(0)";
      // }}
      onBlur={handleOnBlur}
    >
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fund</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
