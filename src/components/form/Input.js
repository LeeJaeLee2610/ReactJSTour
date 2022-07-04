import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullName] = useState("");
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setFullName(event.target.value);
  };
  return (
    <div className="p-5">
      {fullname}
      <input
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-3 border border-gray-400 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
