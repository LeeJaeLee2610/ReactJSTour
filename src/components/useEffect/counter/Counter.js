import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    firstName: "Em",
    lastName: "Cuong",
  });
//   useEffect(() => {
//     console.log(`count: ${count}`);
//   }, [count]);
  useEffect(() => {
    console.log("from input")
  }, [info])
  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => {
          setInfo({
            ...info,
            firstName: e.target.value,
          });
        }}
      />
      <button
        className="inline-block p-3 bg-green-400 text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <span>{count}</span>
    </div>
  );
};

export default Counter;
