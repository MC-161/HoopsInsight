import React from "react";


interface linearprops{
  children: React.ReactNode;
  className?:string;
}
const LinearBorder:React.FC<linearprops> = ({children, className}) => {
  return (
    <div className={`relative rounded-sm ${className}`}>
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
