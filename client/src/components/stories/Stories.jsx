import "./stories.scss";
import { useDispatch, useSelector } from "react-redux";


const Stories = () => {
  const { currentUser } = useSelector((state) => state.user);


  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://avatars.mds.yandex.net/i?id=a1304731a38d9d72d396c2ead1ea3012-5232025-images-thumbs&n=13",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://avatars.mds.yandex.net/i?id=a1304731a38d9d72d396c2ead1ea3012-5232025-images-thumbs&n=13",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://avatars.mds.yandex.net/i?id=a1304731a38d9d72d396c2ead1ea3012-5232025-images-thumbs&n=13",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://avatars.mds.yandex.net/i?id=a1304731a38d9d72d396c2ead1ea3012-5232025-images-thumbs&n=13",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
