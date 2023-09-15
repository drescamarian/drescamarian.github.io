import { useFetch } from "../api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { posts, ExpandUser, Limit } from "../ApiConfig";
import { capitalize } from "../plugIn/capitalize";
import "../css/Home.css";

function Home() {
  const LimLocalSorage = localStorage.getItem("limit");
  const [lim, setLim] = useState(LimLocalSorage || 3);
  const LimReadLocalStorage = localStorage.setItem("limit", lim);
  typeof LimLocalSorage === "string" && LimLocalSorage !== "null" ? LimReadLocalStorage : setLim(3);
  
  const { data, loading, error } = useFetch(posts + ExpandUser + Limit + lim);

  const handleSelect = (e) => {
    setLim(e.target.value);
  };

  return (
    <div className="home">
      <section>
        <h1>Home</h1>
        <select onChange={(e) => handleSelect(e)} value={lim}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
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
