import { useEffect, useState } from "react";
import { useFetch } from "../api";
import { albums, ExpandUser, Limit } from "../ApiConfig";
import { usePagination } from "../assets/usePagination";
import Pagination from "../components/pagination";
import "../css/Album.css";
import Limite from "../components/limit";
import useLimit from "../assets/useLimit";

const Album = () => {
  const amount = 100;

  const limits = [8, 16, 20];

  const { itemsPerPage, handleLimit } = useLimit(8);

  const [currentPages, setCurrentPages] = useState(1);

  const { data, loading, error } = useFetch(
    albums + ExpandUser + "&_page=" + currentPages + Limit + itemsPerPage
  );

  const { next, prev, jump, currentPage, maxPage } = usePagination(
    amount,
    itemsPerPage,
    currentPages
  );

  useEffect(() => {
    setCurrentPages(currentPage);
  }, [currentPage]);

  return (
    <section>
      <div className="album__contain">
        <h2>Albums</h2>
        <Limite
          limits={limits}
          itemsPerPage={itemsPerPage}
          handleLimit={handleLimit}
        ></Limite>
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
      </div>
      <Pagination
        next={next}
        prev={prev}
        jump={jump}
        currentPage={currentPage}
        maxPage={maxPage}
      ></Pagination>
    </section>
  );
};

export default Album;
