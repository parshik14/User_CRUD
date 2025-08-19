import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  return (
   <div className="navbar w-full flex items-center justify-between p-4 bg-transparent absolute top-0">
  {/* Left side buttons */}
  <div className="flex gap-4">
    <button onClick={()=>navigate("/register")}>Register</button>
    <button onClick={()=>navigate("/login")}>Login</button>
  </div>

  {/* Right side button */}
  <div>
    <button>Logout</button>
  </div>
</div>

  );
};

export default Navbar;
