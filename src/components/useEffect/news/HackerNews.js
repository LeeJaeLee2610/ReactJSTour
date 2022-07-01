import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import lodash from "lodash";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(res.data?.hits || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(`Oi doi oi ${err}`);
    }
    // console.log(res.data.hits);
  };
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 2000);
  useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        className="border border-emerald-200 text-black p-5"
        defaultValue={query}
        onChange={handleUpdateQuery}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-400 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && error && <p>{error}</p>}
      {!loading &&
        hits.map((item, index) => {
          return <div key={item.objectID}>{item.url}</div>;
        })}
    </div>
  );
};

export default HackerNews;
