import React from "react";

const Button = ({ children }) => {
  return (
    <div className="text-center my-8">
      <button className="btn btn-error text-white capitalize ring-2 ring-[#f87272] ring-offset-2">
        {children}
      </button>
    </div>
  );
};

export default Button;
