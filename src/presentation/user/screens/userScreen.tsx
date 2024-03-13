import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../App.css";

import { getUsers } from "../../../states/slices/userListSlice";
import { AppDispatch } from "../../../states/store/store";
import logo from "../../../logo.svg";

const UserScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: any) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    console.log(users, loading, error);
  }, [users, loading, error]);

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default UserScreen;
