import { createContext, useContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const fakeData = [
  {
    id: 1,
    url: "https://cdn.dribbble.com/users/2400293/screenshots/15662879/media/0104d2c2c69469478553179b8e77fbab.png?compress=1&resize=1000x750&vertical=top",
    isFavourite: false,
  },
  {
    id: 2,
    url: "https://cdn.dribbble.com/users/2400293/screenshots/15662879/media/0104d2c2c69469478553179b8e77fbab.png?compress=1&resize=1000x750&vertical=top",
    isFavourite: false,
  },
  {
    id: 3,
    url: "https://cdn.dribbble.com/users/2400293/screenshots/15662879/media/0104d2c2c69469478553179b8e77fbab.png?compress=1&resize=1000x750&vertical=top",
    isFavourite: false,
  },
  {
    id: 4,
    url: "https://cdn.dribbble.com/users/2400293/screenshots/15662879/media/0104d2c2c69469478553179b8e77fbab.png?compress=1&resize=1000x750&vertical=top",
    isFavourite: false,
  },
  {
    id: 5,
    url: "https://cdn.dribbble.com/users/2400293/screenshots/15662879/media/0104d2c2c69469478553179b8e77fbab.png?compress=1&resize=1000x750&vertical=top",
    isFavourite: false,
  },
  {
    id: 6,
    url: "https://cdn.dribbble.com/users/2400293/screenshots/15662879/media/0104d2c2c69469478553179b8e77fbab.png?compress=1&resize=1000x750&vertical=top",
    isFavourite: false,
  },
];

const GalleryContext = createContext();

function GalleryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storageCart, setValue: setStorageCart } =
    useLocalStorage("carts", []);
  console.log("storedValue :>> ", storedValue);
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storageCart);
  const [FavouriteList, setFavouriteList] = useState([]);

  function toggleFavourite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavourite: !photo.isFavourite };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      if (isExisted) {
        setStorageCart([...prevItems]);
        return [...prevItems];
      }
      setStorageCart([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }

  function removeToCart(photoID) {
    setCartItems((prevItems) => {
      const result = prevItems.filter((item) => item.id !== photoID);
      setStorageCart(result);
      return result;
    });
  }

  const value = {
    photos,
    cartItems,
    FavouriteList,
    setPhotos,
    setCartItems,
    setFavouriteList,
    toggleFavourite,
    addToCart,
    removeToCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined") {
    throw new Error("DCMM");
  }
  return context;
}

export { useGallery, GalleryProvider };
