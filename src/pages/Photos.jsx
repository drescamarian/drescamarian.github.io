import { useEffect, useMemo, useState } from "react";
import { useFetch } from "../api";
import { Page, Limit, photos } from "../ApiConfig";
import { capitalize } from "../plugIn/capitalize";
import "../css/Photos.css";
import { usePagination } from "../assets/usePagination";
import Pagination from "../componete/pagination";

const Photos = () => {
  const amount = 5000;

  const [itemsPerPage, setLimit] = useState(5);

  const [currentPages, setCurrentPages] = useState(1);

  const { data, loading, error } = useFetch(
    photos + Page + currentPages + Limit + itemsPerPage
  );

  const { next, prev, jump, currentPage, maxPage } = usePagination(
    amount,
    itemsPerPage
  );

  const handleLimit = (e) => {
    setLimit(e.target.value);
  };

  useEffect(() => {
    setCurrentPages(currentPage);
  }, [currentPage]);

  return (
    <div className="photo">
      <h1>Photos</h1>
      <div>
        <label htmlFor="limit">
          Limit
        </label>
          <select
            name="limit"
            id="limit"
            value={itemsPerPage}
            onChange={handleLimit}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {data && (
        <div className="photos">
          {data.map((photo) => (
            <div key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{capitalize(photo.title)}</p>
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
      />
    </div>
  );
};

export default Photos;
