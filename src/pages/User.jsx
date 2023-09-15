import { useFetch } from "../api";
import { useParams } from "react-router-dom";
import { users, todos } from "../ApiConfig";
import "../css/User.css";

function User() {
  const { userid } = useParams();
  const { data, loading, error } = useFetch(users + userid);
  const {
    data: todo,
    loading: todosLoad,
    error: todosError,
  } = useFetch(users + userid + todos);
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <section>
      <div className="single__user">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div>
            <h2>{data.username}</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.address.street}</td>
                  <td>{data.phone}</td>
                  <td>{data.website}</td>
                  <td>{data.company.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="todos">
        <h2>Todos</h2>
        {todosLoad && <p>Loading...</p>}
        {todosError && <p>Error: {todosError}</p>}
        {todo && (
          <ul>
            {todo.map((todo) => (
              <li 
              {...todo.completed ? {className: "todosFinished"} : {className: "todosUnfinished"} }
              key={todo.id}>{capitalize(todo.title)}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default User;
