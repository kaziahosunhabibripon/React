import { useEffect, useState } from "react";
import "./index.css";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => setUsers(json));
  }, []);
  return (
    <div>
      <section>
        <div className="container">
          <h1>Responsive Users Card Design</h1>
          <div className="card">
            {users.map((user, key) => (
              <div className="card-body" key={user.id} user={user}>
                <h2>
                  <label>Name : </label> {user.name}
                </h2>
                <h4>
                  <label> User Name: </label>
                  {user.username}
                </h4>
                <p>
                  <label>Email: </label>
                  {user.email}
                </p>
                <p>
                  <label>Address : </label>
                  <label>Street: </label>
                  <span>{user.address.street}</span>
                  <br />
                  <label>City: </label>
                  <span> {user.address.city}</span>
                </p>
                <h6>
                  <label>Phone: </label>
                  {user.phone}
                </h6>
                <p>
                  <label> Website : </label>
                  {user.website}
                </p>
                <button className="btn">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
