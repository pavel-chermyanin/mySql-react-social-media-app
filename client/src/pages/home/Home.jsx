import React, { useContext, useEffect, useRef } from "react";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import { AuthContext } from "../../context/authContext";
import "./home.scss";

const Home = () => {
  const homeRef = useRef();
  let isFirstRender = useRef(true);

  // useEffect(() => {
  //   if(isFirstRender) {
  //     localStorage.removeItem('scroll')
  //     isFirstRender = false
  //   }
  // }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      const num = homeRef?.current?.scrollTop;
      localStorage.setItem("scroll", num);
    };
    homeRef?.current?.addEventListener("scroll", handleScroll);

    return () => {
      homeRef?.current?.removeEventListener("scroll", handleScroll);
      // localStorage.removeItem("scroll");
    };
  }, []);

  useEffect(() => {
    homeRef?.current?.scrollTo(0, localStorage.getItem("scroll") || 0);
  });

  return (
    <div className="home" ref={homeRef}>
      <Stories />
      <Posts />
    </div>
  );
};

export default Home;
