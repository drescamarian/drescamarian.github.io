import pagination from '../css/pagination.css';

const Pagination = ({currentPage, prev, jump, next, maxPage}) => {

  
    return (
        <div className="pagination">
        {currentPage > 1 && <button onClick={() => prev()}>PREV</button>} 

        {currentPage > 1 && <span className="dot">. . .</span> }

        {currentPage - 2 > 0 && (
          <button onClick={() => jump(currentPage - 2)}>
            {currentPage - 2}
          </button>
        )}

        {currentPage - 1 > 0 && (
        <button onClick={() => jump(currentPage - 1)}>{currentPage - 1}</button>
          )}
        
        <button className="active">{currentPage}</button>

        {currentPage + 1 <= maxPage && (
          <button onClick={() => jump(currentPage + 1)}>
            {currentPage + 1}
          </button>
        )}

        {currentPage + 2 <= maxPage && (
          <button onClick={() => jump(currentPage + 2)}>
            {currentPage + 2}
          </button>
        )}

        {currentPage + 3 <= maxPage && <span className="dot">. . .</span>}

        {currentPage < maxPage && <button onClick={() => next()}>NEXT</button>}
      </div>
    )

}

export default Pagination;