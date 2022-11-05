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

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const [comments, setComments] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  // const comments = useSelector(selectComments(postId));
  const dispatch = useDispatch();
  // console.log(comments)
  //temp
  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await makeRequest.get("/comments?postId=" + postId);
      return data;
    };
    fetchComments().then((res) => setComments(res));
    // dispatch(fetchComments(postId));
  }, [postId, forceUpdate]);

  const handleClick = async (e) => {
    e.preventDefault();
    await makeRequest.post("/comments", { desc, postId });
    setForceUpdate(!forceUpdate);
    // dispatch(addComment({ desc, postId }));
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
      {comments.length > 0 && comments.map((comment) => (
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
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
