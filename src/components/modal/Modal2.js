import React from "react";
import ReactDOM from "react-dom";

const Modal2 = ({ open = false, handleClose = () => {} }) => {
    // Nếu ko có cái này thì render ra này để ko bị lỗi khi chạy vào router
  if (typeof document == "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    // Tạo 1 lớp phủ lên trên cùng cấp vs root
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5 modal">
      <div className="overlay absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="modal-content z-10 p-10 bg-white relative rounded-lg max-w-[482px] w-full">
        <span className="absolute top-0 right-0 cursor-pointer">Close</span>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal2;
