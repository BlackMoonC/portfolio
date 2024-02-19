import axios from "axios";
import Link from "next/link";

const getPosts = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data.slice(0, 3);
  } catch (error) {
    console.error(error);
  }
  return posts;
};
async function Portfolio() {
  const posts = await getPosts();
  const renderPosts = () => {
    return posts.map((post) => (
      <Link href={"/portfolio/" + post.id}>
        <li key={post.id}>{post.title}</li>
      </Link>
    ));
  };

  return (
    <>
      <h1>Portfolio</h1>
      <ul>{renderPosts()}</ul>
    </>
  );
}

export default Portfolio;
