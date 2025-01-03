import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedIcon from "../icons/AnimatedIcon";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="w-40 h-40 ">
          <AnimatedIcon color="#040007" />
        </div>
      </div>
    );
  return (
    <div className="px-5 py-3 bg-gradient-to-l from-darkpurple to-darkblack h-screen flex justify-center items-center flex-col">
      {data.map((item, index) => (
        <div key={index} className="flex flex-row items-center gap-3">
          <p className="font-roboto text-white text-start">{item.username}</p>
          <button
            onClick={() => navigate(`/user/${item.id}`)}
            className="text-white w-full py-2 px-3 bg-transparent border-white border rounded-md"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
