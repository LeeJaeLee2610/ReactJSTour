import React, { useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import ReactDOM from "react-dom";

const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleClick = (e) => {
    console.log(nodeRef.current.getBoundingClientRect());
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[500px]" ref={nodeRef}>
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};

function DropdownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute left-0 w-full p-5 bg-white border border-gray-300 rounded-lg top-full"
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="py-3 cursor-pointer">ReactJS</div>
      <div className="py-3 cursor-pointer">JavaScript</div>
      <div className="py-3 cursor-pointer">ExpressJS</div>
    </div>,
    document.querySelector("body")
  );
}

export default DropdownPortal;
