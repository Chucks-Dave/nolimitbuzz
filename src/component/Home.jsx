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

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="w-40 h-40 ">
          <AnimatedIcon color="#040007" />
        </div>
      </div>
    );
  return (
    <div className="px-5 py-5 bg-gradient-to-l from-darkpurple to-darkblack h-screen ">
      <div className="w-full flex justify-between items-center  border-white border px-8 rounded-md ">
        {" "}
        <p className="text-white ">id</p>
        <p className="text-white px-4">name</p>
        <p className="text-white">Action</p>
      </div>
      {currentItems.map((item, index) => (
        <div
          key={index}
          className="w-full flex justify-between items-center gap-10  px-8 "
        >
          <p className="text-white">{item.id}</p>
          <p className="font-roboto text-white ">{item.username}</p>
          <span className="pt-5">
            <button
              onClick={() => navigate(`/user/${item.id}`)}
              className="text-white w-16 py-2 rounded-md bg-transparent border-white border font-playfair text-[10px]"
            >
              View Details
            </button>
          </span>
        </div>
      ))}
      <div className="flex justify-center space-x-2 mt-20">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className="bg-transparent  text-white border-white border font-bold py-2 px-4 rounded"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
