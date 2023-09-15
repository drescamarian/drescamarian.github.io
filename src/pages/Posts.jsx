import { useFetch } from "../api";
import { Link } from "react-router-dom";
import "../css/Posts.css";

const Posts =  () => {
  const { data, loading, error } =  useFetch("posts");
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  return (
    <section className="posts">
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && 
        data.map((post) => (
          <Link key={post.id} to={`${post.id}/${post.userId}`}>
          <div className="container">
            <h2 className="title">{capitalize(post.title)}</h2>
            <p className="content">{capitalize(post.body)}</p>
          </div>
          </Link>
        ))
        }
    </section>
  );
}

export default Posts;