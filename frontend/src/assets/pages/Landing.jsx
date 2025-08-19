import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";

const Landing = () => {

    const navigate = useNavigate()
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className="container w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 ">
      <div className="border-2 rounded flex flex-col items-center p-10 shadow-2xl bg-gray-300">
        <div className="text font-bold text-6xl mb-10 drop-shadow-2xl">
          USER CRUD
        </div>
        <div className="para mb-10">
          This is full authenticated user crud operation with also focus on
          photo upload and file upload
        </div>
        <div className="grid grid-cols-2 gap-x-20 gap-y-10 text-xl" >
          <button className="bg-blue-500 text-white rounded cursor-pointer p-5" onClick={()=>navigate('/getuser')}>
            Get User
          </button>
          <button className="bg-green-500 text-white rounded cursor-pointer p-5" onClick={()=>navigate("/getalluser")}>
            All User
          </button>
          <button className="bg-yellow-500 text-white rounded cursor-pointer p-5" onClick={()=>navigate("updateuser")}>
            Update User
          </button>
          <button className="bg-red-500 text-white rounded cursor-pointer p-5">
            Delete User
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Landing;
