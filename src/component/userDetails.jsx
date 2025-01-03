import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimatedIcon from "../icons/AnimatedIcon";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const result = await response.json();
      setUser(result);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="w-40 h-40 ">
          <AnimatedIcon color="#040007" />
        </div>
      </div>
    );

  if (!user) return <div>No user found</div>;

  return (
    <div className="px-5 py-4 bg-gradient-to-l from-darkpurple to-darkblack h-screen flex justify-center items-center flex-col">
      <h1 className="text-white text-3xl font-bold">{user.name}</h1>
      <p className="text-white">Email: {user.email}</p>
      <p className="text-white">Phone: {user.phone}</p>
      <p className="text-white">Website: {user.website}</p>
      <p className="text-white">{user.company.name}</p>
      <p className="text-white">{user.company.catchPhrase}</p>
      <p className="text-white">{user.company.bs}</p>
      <p className="text-white">
        Address:{`${user.address.city}, ${user.address.city}`},
      </p>
    </div>
  );
};

export default UserDetails;
