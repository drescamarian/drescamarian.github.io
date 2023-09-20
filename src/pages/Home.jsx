import { useFetch } from "../api";
import { Link } from "react-router-dom";
import { posts, ExpandUser, Limit } from "../ApiConfig";
import { capitalize } from "../plugIn/capitalize";
import "../css/Home.css";
import Limite from "../components/limit";
import useLimit from "../assets/useLimit";

function Home() {
  const LimLocalSorage = localStorage.getItem("limit");

  const limits = [3, 5, 10]
  
  const { itemsPerPage, handleLimit, setLimit } = useLimit(LimLocalSorage || 3);

  const LimReadLocalStorage = localStorage.setItem("limit", itemsPerPage);

  typeof LimLocalSorage === "string" && LimLocalSorage !== "null" ? LimReadLocalStorage : setLimit(3);

  const { data, loading, error } = useFetch(posts + ExpandUser + Limit + itemsPerPage);

  return (
    <div className="home">
      <section>
        <h1>Home</h1>
        <Limite
          limits={limits}
          itemsPerPage={itemsPerPage}
          handleLimit={handleLimit}
        />
        <div className="posts">
          {loading && <h2>Loading...</h2>}
          {error && <h2>Error...</h2>}
          {data &&
            data.map((dat) => (
              <div className="post" key={dat.id}>
                <h2>{capitalize(dat.title)}</h2>
                <p>{capitalize(dat.body)}</p>
                <span>
                  <p>Author: {capitalize(dat.user.username)} </p>{" "}
                  <Link to={`/posts/${dat.id}/${dat.userId}`}>Read more</Link>
                </span>
              </div>
            ))}
        </div>
      </section>
      <Link to={`/posts`} className="link__posts">
        Read more
      </Link>
    </div>
  );
}

export default Home;
