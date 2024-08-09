import React from "react";
import { LogoItemProps } from "@/types/Navbar/NavbarTypes";

const LogoItem: React.FC<LogoItemProps> = ({ src, alt, width, href, border }) => (
  <li className={`flex flex-col items-center justify-center ${border ? 'border-r-2' : ''} hover:opacity-60`}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img className={`cursor-pointer ${width}`} src={src} alt={alt} />
    </a>
  </li>
);


export default LogoItem;
