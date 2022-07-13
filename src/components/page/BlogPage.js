import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({ search: "emcuong" });
  }, []);
  return <div>Blog Page</div>;
};

export default BlogPage;
