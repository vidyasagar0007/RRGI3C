import { useState} from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await res.json();

      setUsers(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

//   useEffect(() => {
// getData();
//   }, []);

  return (
    <div>
      <h1 className="text-red-500">Example of useEffect</h1>

      <button onClick={() => setCount((count) => count + 1)} type="button">
        Increase
      </button>

      <p>Count: {count}</p>

      <button onClick={getData} type="button">Fetch Data</button>

      <h2>Users List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffect;