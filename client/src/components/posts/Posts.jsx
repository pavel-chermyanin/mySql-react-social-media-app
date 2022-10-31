import './posts.scss'
import Post from '../post/Post'

const Posts = () => {
    const posts = [
      {
        id: 1,
        name: "John Doe",
        userId: 1,
        profilePic:
          "https://avatars.mds.yandex.net/i?id=e6b17b4ac490ae7819a2b5957a89d5e5-5305537-images-thumbs&n=13",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        img: "https://avatars.mds.yandex.net/i?id=14511f9c658b5f8c58ed58eac2e2894f-5232046-images-thumbs&n=13",
      },
      {
        id: 2,
        name: "Jane Doe",
        userId: 2,
        profilePic:
          "https://avatars.mds.yandex.net/i?id=98ac4d87dd91c389557ed01bffc58ecb-4350294-images-thumbs&n=13",
        desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      },
    ];
  return (
    <div className='posts'>
      {posts.map(post=> (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts