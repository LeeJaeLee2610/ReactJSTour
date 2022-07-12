import React, { Fragment, useState } from "react";
import { AuthProvider } from "./components/contexts/auth-context";
import { GalleryProvider } from "./components/contexts/gallery-context";
import CartList from "./components/gallery/CartList";
import HeaderMain from "./components/gallery/HeaderMain";
import PhotoList from "./components/gallery/PhotoList";
// import Modal2 from "./components/modal/Modal2";
// import Modal from "./components/modal/Modal";
// import DropdownPortal from "./components/ref_custom_hooks/DropdownPortal";
// import Tooltip from "./components/tooltip/Tooltip";
// import SignUpForm from "./components/form/SignUpForm";
// import SignUpFormFinal from "./components/form/SignUpFormFinal";
// import Form from "./components/form/Form";
// import MovieSearchApp from "./components/form/MovieSearchApp";
// import Blog from "./components/ref_custom_hooks/Blog";
// import SideBarMenu from "./components/ref_custom_hooks/SideBarMenu";
// import Dropdown from "./components/ref_custom_hooks/Dropdown";
// import TextAreaAutoResize from "./components/ref_custom_hooks/TextAreaAutoResize";
// import Clock from "./components/ref_custom_hooks/Clock";
// import Input from "./components/ref_custom_hooks/Input";`
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
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
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
        className="inline-block p-3 m-3 text-white bg-green-400 rounded-lg"
        onClick={() => setShow(true)}
      >
        Show Menu
      </button>
      <SideBarMenu show={show} ref={nodeRef}></SideBarMenu>
      <Dropdown></Dropdown> */}
      {/* <Form></Form> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <SignUpForm></SignUpForm> */}
      {/* <SignUpFormFinal></SignUpFormFinal> */}
      {/* <div>
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 m-5 text-white bg-blue-500 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
      <div className="overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div>
      <div className="p-16 mt-16 ml-16">
        <Tooltip text="Hover me">This is a tooltip content</Tooltip>
      </div> */}
      {/* <Portal></Portal> */}
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
