import React from "react";

const Logo = ({ logo }) => {
  return (
    <div className="absolute -top-8 left-3 z-1">
      <img className="w-2/3" src={logo} alt="" />
    </div>
  );
};
export default Logo;
