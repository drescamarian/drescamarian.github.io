import { useEffect, useState } from "react";
import { useFetch } from "../api";
import { albums, ExpandUser, Page, Limit } from "../ApiConfig";
import { usePagination } from "../assets/usePagination";
import Pagination from "../componete/pagination";
import "../css/Album.css";

const Album = () => {
  const amount = 100;
  const [itemsPerPage, setLimit] = useState(8);
  const [currentPages, setCurrentPages] = useState(1);
  const { data, loading, error } = useFetch(
    albums + ExpandUser + "&_page=" + currentPages + Limit + itemsPerPage
  );
  const { next, prev, jump, currentPage, maxPage } = usePagination(
    amount,
    itemsPerPage,
    currentPages,
  );

  const handleLimit = (e) => {
    setLimit(e.target.value);
  };

  useEffect(() => {
    setCurrentPages(currentPage);
  }, [currentPage]);

  return (
    <div className="album__contain">
      <h2>Albums</h2>
      <div>
        <label htmlFor="limit">
          Limit
          <select
            name="limit"
            id="limit"
            value={itemsPerPage}
            onChange={handleLimit}
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="20">20</option>
          </select>
        </label>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {data && (
        <div className="album">
          {data.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.user.username}</p>
            </div>
          ))}
        </div>
      )}

      <Pagination
        next={next}
        prev={prev}
        jump={jump}
        currentPage={currentPage}
        maxPage={maxPage}
      ></Pagination>
    </div>
  );
};

export default Album;
