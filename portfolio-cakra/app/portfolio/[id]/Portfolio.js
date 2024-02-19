import axios from "axios";

async function Portfolio({ params }) {
  debugger;

  const name = "Cakra";
  function doing() {
    console.log(name);
  }
  const b = 7;

  doing();
  const post = await getPostById(params.id);
  return (
    <>
      <h1 className="font-bold">{post.title}</h1>
      <p>{post.body}</p>
      <h2>{post.id}</h2>
    </>
  );
}
const getPostById = async (id) => {
  try {
    console.log(id);
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export default Portfolio;
