import React, { useState, useEffect } from "react";
import InputForm from "./InputForm/InputForm";
import UserList from "./UserList/UserList";
import Pagination from "./Pagination/Pagination";
import { User, Query, requestUsers } from "../../api/api";
import "./App.css";
const App: React.FC = () => {
  const [query, setQuery] = useState<Query>({
    name: "",
    age: "",
    limit: 4,
    offset: 0
  });
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    requestUsers(query)
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(err.message || "An error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="wrapper">
      <InputForm query={query} setQuery={setQuery} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <UserList users={users} />
          <Pagination totalUsers={10} query={query} setQuery={setQuery} />
        </>
      )}
    </div>
  );
};

export default App;
