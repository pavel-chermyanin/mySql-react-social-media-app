import React, { useCallback, useContext, useEffect, useRef } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import { AuthContext } from "../../context/authContext";
import { fetchPosts } from "../../store/postsSlice";
import "./home.scss";

const Home = memo(() => {
  const homeRef = useRef();
  let isFirstRender = useRef(true);

    // const dispatch = useDispatch();

    // const { posts, isLoadingPosts } = useSelector((state) => state.posts);
    //   const fetchPostsMemo = useCallback(() => {
    //     dispatch(fetchPosts());
    //   });


  // useEffect(() => {
  //   if(isFirstRender) {
  //     localStorage.removeItem('scroll')
  //     isFirstRender = false
  //   }
  // }, []);

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     const num = homeRef?.current?.scrollTop;
  //     localStorage.setItem("scroll", num);
  //   };
  //   homeRef?.current?.addEventListener("scroll", handleScroll);

  //   return () => {
  //     homeRef?.current?.removeEventListener("scroll", handleScroll);
  //     // localStorage.removeItem("scroll");
  //   };
  // }, []);

  // useEffect(() => {
  //   homeRef?.current?.scrollTo(0, localStorage.getItem("scroll") || 0);
  // });

  return (
    <div className="home" ref={homeRef}>
      <Stories />
      <Posts />
    </div>
  );
});

export default Home;
