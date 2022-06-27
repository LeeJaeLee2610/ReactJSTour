import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (page) => {
  try {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos = () => {
  const [randPhotos, setRandPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMorePhotos = useRef({});

  handleLoadMorePhotos.current = async () => {
    // getRandomPhotos(nextPage).then((images) => {
    //   console.log(images);
    //   const newPhotos = [...randPhotos, ...images];
    //   setRandPhotos(newPhotos);
    //   setNextPage(nextPage + 1);
    // });
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randPhotos, ...images];
    setRandPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    handleLoadMorePhotos.current();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randPhotos.map((item, index) => {
          return (
            <div
              key={item.id}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button
          className="inline-block px-8 py-4 bg-pink-600 text-black"
          onClick={handleLoadMorePhotos.current}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;
