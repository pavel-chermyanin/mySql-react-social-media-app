import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { memo, useCallback, useEffect } from "react";
import { fetchPosts } from "../../store/postsSlice";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

const Posts = memo(() => {
  const dispatch = useDispatch();

const customEqual = (oldValue, newValue) => oldValue.id === newValue.id;
  const { posts, isLoadingPosts } = useSelector(
    (state) => state.posts,
    customEqual
  );

  const getPosts = async () => {
    const { data } = await makeRequest.get("/posts");
    return data;
  };
  // const { isLoading, error, data } = useQuery(["posts"], getPosts, {
  //   refetchOnWindowFocus: false,
  // });

  const fetchPostsMemo = useCallback(() => {
    dispatch(fetchPosts());

  })
  useEffect(() => {
    fetchPostsMemo();
  }, [dispatch]);
  // console.log(data);
  return (
    <div className="posts">
      {/* {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)} */}
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
});

export default Posts;
