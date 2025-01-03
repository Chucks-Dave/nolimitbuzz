import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimatedIcon from "../icons/AnimatedIcon";
import { useNavigate } from "react-router-dom";
import Arrow from "../icons/ArrowIcon";
import PhoneIcon from "../icons/PhoneIcon";
import UserIcon from "../icons/UserIcon";
import MailIcon from "../icons/MailIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
import ComapnyIcon from "../icons/ComapnyIcon";
import PhraseIcon from "../icons/PhraseIcon";
import CityIcon from "../icons/CityIcon";
import StreetIcon from "../icons/StreetIcon";
import ZipIcon from "../icons/ZipIcon";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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
    <div className=" py-4 bg-gradient-to-l from-darkpurple to-darkblack h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mt-4 py-2 px-4  text-white font-playfair text-[1rem] font-medium  flex items-center gap-2 "
      >
        {" "}
        <Arrow />
        Back
      </button>
      <p className="text-center text-white font-playfair text-[1.5rem] font-medium ">
        User Details
      </p>
      <div className="px-24 relative  flex justify-center items-center">
        <div className="  flex  flex-col gap-3 py-2 border-white border rounded-md px-8">
          <div className="flex items-center gap-2">
            <UserIcon />
            <h1 className=" text-white font-playfair text-[1rem] font-medium ">
              {user.name}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <UserIcon />
            <h1 className=" text-white font-playfair text-[1rem] font-medium ">
              {user.username}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon />
            <p className="text-white font-playfair text-[1rem] font-medium ">
              {user.email}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <p className="text-white font-playfair text-[1rem] font-medium ">
              {user.phone}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <WebsiteIcon />
            <p className="text-white font-playfair text-[1rem] font-medium ">
              {user.website}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ComapnyIcon />
            <p className="text-white font-playfair text-[1rem] font-medium ">
              {user.company.name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PhraseIcon />
            <p className="text-white font-playfair text-[1rem] font-medium ">
              {user.company.catchPhrase}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PhraseIcon />
            <p className="text-white font-playfair text-[1rem] font-medium ">
              {user.company.bs}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CityIcon />
            <p className="text-white font-playfair text-[1rem] font-medium ">
              {user.address.city}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StreetIcon />
            <p className="text-white font-playfair text-[1rem] font-medium ">
              {user.address.street}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StreetIcon />
            <p className="text-white font-playfair text-[1rem] font-medium ">
              {user.address.suite}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ZipIcon />
            <p className="text-white font-playfair text-[1rem] font-medium ">
              {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
