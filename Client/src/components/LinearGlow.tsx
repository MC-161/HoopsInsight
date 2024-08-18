import React from "react";

interface LinearGlowProps{
  children: React.ReactNode
}

const LinearGlow:React.FC<LinearGlowProps> = ({children}) => {
  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary-gradient_purple via-orange-600 to-primary-gradient_yellow opacity-75 blur"></div>
      <div className="relative flex h-full w-fit items-center justify-center rounded-lg text-slate-300">
        {children}
      </div>
    </div>
  );
};

export default LinearGlow;
