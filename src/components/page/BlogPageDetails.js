import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      BlogPageDetails
      <button
        className="p-3 rounded-md bg-pink-400"
        onClick={() => navigate("/blog")}
      >
        Navigate to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetails;
