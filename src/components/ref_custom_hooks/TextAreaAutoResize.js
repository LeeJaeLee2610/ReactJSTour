import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [textareaWrapperHeight, setTextareaWrapperHeight] = useState("auto");

  const handleChange = (event) => {
    console.log(event.target.value);
    setTextareaWrapperHeight(`${textareaRef?.current?.scrollHeight}px`);
    setTextareaHeight("auto");
    setText(event.target.value);
  };

  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    setTextareaWrapperHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div
      className="p-5"
      style={{
        minHeight: textareaWrapperHeight,
      }}
    >
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-400 resize-none"
        placeholder="Nhap vao tk loz kia"
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
