import React, { useState, useEffect } from "react";

import InputForm from "./InputForm/InputForm";
import UserList from "./UserList/UserList";
import Pagination from "./Pagination/Pagination";
import {  requestUsers } from "../../api/api";
import { User,Query } from "../../types/common";

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

  const render =  loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <UserList users={users} />
          
        </>
      )

  return (
    <div className="wrapper">
      <InputForm query={query} setQuery={setQuery} />
      {render}
      <Pagination totalUsers={10} query={query} setQuery={setQuery} />
    </div>
  );
};

export default App;
