import React from "react";
// import Form from "./components/form/Form";
import MovieSearchApp from "./components/form/MovieSearchApp";
// import Blog from "./components/ref_custom_hooks/Blog";
// import SideBarMenu from "./components/ref_custom_hooks/SideBarMenu";
// import Dropdown from "./components/ref_custom_hooks/Dropdown";
// import TextAreaAutoResize from "./components/ref_custom_hooks/TextAreaAutoResize";
// import Clock from "./components/ref_custom_hooks/Clock";
// import Input from "./components/ref_custom_hooks/Input";
// import HackerNews from "./components/useEffect/news/HackerNews";
// import Counter from "./components/useEffect/counter/Counter";
// import Photos from "./components/useEffect/photo/Photos";
// import Timer from "./components/useEffect/Timer";
// import Header from "./components/useEffect/Header";
// import { GlobalStyles } from "./GlobalStyles";
// import CardList from "./components/styledComponent/card/CardList";
// import { ThemeProvider } from "styled-components";
import "./index.css";
// import CardTailwind from "./components/styledComponent/card/CardTailwind";
// import useClickOutSide from "../src/hooks/useClickOutSide";

// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
// };

const App = () => {
  // const [show, setShow] = useState(false);
  // const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="p-5">
      {/* <GlobalStyles></GlobalStyles> */}
      {/* <CardList></CardList> */}
      {/* <CardTailwind></CardTailwind> */}
      {/* <Photos></Photos> */}
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews> */}
      {/* <Clock></Clock>
      <Input></Input> */}
      {/* <TextAreaAutoResize></TextAreaAutoResize> */}
      {/* <Dropdown></Dropdown> */}
      {/* <Blog></Blog> */}
      {/* <button
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
        onClick={() => setShow(true)}
      >
        Show Menu
      </button>
      <SideBarMenu show={show} ref={nodeRef}></SideBarMenu>
      <Dropdown></Dropdown> */}
      {/* <Form></Form> */}
      <MovieSearchApp></MovieSearchApp>
    </div>
  );
};

export default App;
