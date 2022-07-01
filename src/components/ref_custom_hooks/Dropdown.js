import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutDropdown(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
      // else {
      //   console.log("click inside");
      // }
    }
    document.addEventListener("click", handleClickOutDropdown);
    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  });
  return (
    <div className="relative w-full max-w-[500px]" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Selected
      </div>
      {showDropdown && (
        <div className="p-5 border border-gray-300 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="py-3 cursor-pointer">ReactJS</div>
          <div className="py-3 cursor-pointer">JavaScript</div>
          <div className="py-3 cursor-pointer">ExpressJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
