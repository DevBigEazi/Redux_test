import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsLists = () => {
  const posts = useSelector(selectAllPosts);
  console.log(posts);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsLists;
