import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "TANG":
      return state + 1;
    case "GIAM":
      return state - 1;
    case "XOA":
      return 0;
    default:
      return state;
  }
};

const initState = {
  loading: false,
  data: [],
  error: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        data: [],
        error: action.data,
      };
    default:
  }
};

const DemoReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const [user, userDispatch] = useReducer(userReducer, initState);
  const getUsers = () => {
    userDispatch({
      type: "GET_USER_REQUEST",
    });

    setTimeout(() => {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((res) => {
          userDispatch({
            type: "GET_USER_SUCCESS",
            data: res,
          });
          console.log(res);
        })
        .catch((err) => {
          userDispatch({
            type: "GET_USER_ERROR",
            data: err,
          });
        });
    }, 1000);
  };
  return (
    <div className="p-5">
      <div className="p-5 grid grid-cols-3 gap-5 max-w-[400px] w-full mb-5">
        <button
          className="p-3 rounded-lg bg-blue-500"
          onClick={() => dispatch("TANG")}
        >
          Tang
        </button>
        <button
          className="p-3 rounded-lg bg-red-400"
          onClick={() => dispatch("GIAM")}
        >
          Giam
        </button>
        <button
          className="p-3 rounded-lg bg-pink-400"
          onClick={() => dispatch("XOA")}
        >
          Xoa
        </button>
        <p>{count}</p>
      </div>
      <button onClick={getUsers} className="p-3 rounded-lg bg-pink-400">
        Get User
      </button>
      {user.loading ? <p>Loading...</p> : <p>{JSON.stringify(user)}</p>}
    </div>
  );
};

export default DemoReducer;
