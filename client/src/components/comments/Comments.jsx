import "./comments.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
// import { addComment, fetchComments } from "../../store/commentSlice";
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import {
  fetchComments,
  selectComments,
  addComment,
} from "../../store/commentSlice";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");

  const { currentUser } = useSelector((state) => state.user);

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => res.data)
  );
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading
        ? "Loading..."
        : data.map((comment) => (
            <div className="comment" key={comment.id}>
              <Link to={`/profile/${comment.userId}`}>
                <img src={comment.profilePic} alt="" />
              </Link>
              <div className="info">
                <Link to={`/profile/${comment.userId}`}>
                  <span>{comment.name}</span>
                </Link>
                <p>{comment.desc}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
