import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //temp
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://avatars.mds.yandex.net/i?id=fb102207e31b304d6a3f26b6af09baf4-5869856-images-thumbs&n=13",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://avatars.mds.yandex.net/i?id=df1cac31c4eb54670fcc463c5716b68f-5161002-images-thumbs&n=13",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.userId}>
          <Link to={`/profile/${comment.userId}`}>
            <img src={comment.profilePicture} alt="" />
          </Link>
          <div className="info">
            <Link to={`/profile/${comment.userId}`}>
              <span>{comment.name}</span>
            </Link>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
