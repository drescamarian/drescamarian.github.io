import { useFetch } from "../api";
import { Link } from "react-router-dom";
import { users } from "../ApiConfig";
import '../css/Users.css';
const Users = () => {
  const { data, loading, error } = useFetch(users);

  return (
    <div className="users__all">
      <h1>Users</h1>
      <div className="users__cards">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data &&
        data.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`}>
          <div >
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          </Link>
        ))}
        </div>
    </div>
  );
}

export default Users;