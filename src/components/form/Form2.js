import React, { useState } from "react";

const Form2 = () => {
  // const [fullname, setFullName] = useState("");
  // const [message, setMassage] = useState("");
  // const [country, setCountry] = useState("");
  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   setFullName(event.target.value);
  // };
  // const handleTextChange = (event) => {
  //   console.log(event.target.value);
  //   setMassage(event.target.value);
  // };
  // const handleSelectChange = (event) => {
  //   console.log(event.target.value);
  //   setCountry(event.target.value);
  // };
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const type = e.target.type;
    if (type === "checkbox") {
      setValues({
        ...values,
        [e.target.name]: e.target.checked,
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        {/* {fullname} */}
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-3 border border-gray-400 rounded-lg"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-400 rounded-lg"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        <input type="checkbox" name="hobby" onChange={handleInputChange} />
        {/* {message}
      <textarea
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your message"
        name="message"
        onChange={handleTextChange}
      ></textarea>
      {country}
      <select name="country" id="" onChange={handleSelectChange}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">JP</option>
      </select> */}
      </div>
    </div>
  );
};

export default Form2;
