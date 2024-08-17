import React from "react";


interface linearprops{
  children: React.ReactNode
}
const LinearBorder:React.FC<linearprops> = ({children}) => {
  return (
    <div className="relative rounded-sm">
      <div
        className="absolute -inset-px bg-gradient-to-r from-yellow-400 to-pink-400 rounded-sm"
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 bg-background-alt rounded-sm"
        aria-hidden="true"
      ></div>
      {children}
    </div>
  );
};

export default LinearBorder;
