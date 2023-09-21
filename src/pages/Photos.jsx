import { useEffect, useState } from "react";
import { useFetch } from "../api";
import { Page, Limit, photos } from "../ApiConfig";
import { capitalize } from "../plugIn/capitalize";
import "../css/Photos.css";
import { usePagination } from "../assets/usePagination";
import Pagination from "../components/pagination";
import useLimit from "../assets/useLimit";
import Limite from "../components/limit";

const Photos = () => {
  const amount = 5000;

  const limits = [6, 10, 20];

  const { itemsPerPage, handleLimit } = useLimit(limits[0]); // (6)
  
  const [currentPages, setCurrentPages] = useState(1);

  const { data, loading, error } = useFetch(
    photos + Page + currentPages + Limit + itemsPerPage
  );

  const { next, prev, jump, currentPage, maxPage } = usePagination(
    amount,
    itemsPerPage
  );

  useEffect(() => {
    setCurrentPages(currentPage);
  }, [currentPage]);

  return (
    <section>
      <div className="photo">
        <h1>Photos</h1>
        <Limite limits={limits} itemsPerPage={itemsPerPage} handleLimit={handleLimit} />
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
      </div>
      <Pagination
        next={next}
        prev={prev}
        jump={jump}
        currentPage={currentPage}
        maxPage={maxPage}
      />
    </section>
  );
};

export default Photos;
