import React from "react";
import "./UserList.css";
import { UserListProps } from "../../../types/common";

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="user-list">
      {users.length === 0 ? (
        <p>Users not found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <span className="user-name">{user.name}, </span>
              <span className="user-age">{user.age} </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
