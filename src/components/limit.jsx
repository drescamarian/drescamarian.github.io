import "../css/limit.css";
function Limite({limits, itemsPerPage, handleLimit }) {
    
  return (
    <div className="limit">
      <label htmlFor="limit">Limit</label>
      <select
        name="limit"
        id="limit"
        value={itemsPerPage}
        onChange={handleLimit}
      >
        {limits.map((limit) => (
            <option key={limit} value={limit}>
                {limit}
            </option>
        ))}
      </select>
    </div>
  );
}
export default Limite;
