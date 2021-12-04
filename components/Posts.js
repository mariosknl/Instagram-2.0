import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "marios",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "SUBSRIBE AND DESTROY THE LIKE BUTTON FOR THE YT algorith",
  },
  {
    id: "123",
    username: "marios",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "SUBSRIBE AND DESTROY THE LIKE BUTTON FOR THE YT algorith",
  },
];

function Posts() {
  return (
    <div>
      {posts.map(({ id, username, userImg, img, caption }) => (
        <Post
          key={id}
          id={id}
          username={username}
          userImg={userImg}
          img={img}
          caption={caption}
        />
      ))}
    </div>
  );
}

export default Posts;
