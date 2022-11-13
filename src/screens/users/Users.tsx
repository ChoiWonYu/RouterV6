import React from "react";
import { Link, Outlet } from "react-router-dom";
import { users } from "../../db";

const User = () => {
  return (
    <>
      <h1>User</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default User;
