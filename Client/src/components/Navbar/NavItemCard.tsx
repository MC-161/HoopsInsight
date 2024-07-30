import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { NavItemCardProps } from "@/types/Navbar/NavbarTypes";
import React from 'react';

const NavItemCard:React.FC<NavItemCardProps> = ({ title, description, bgClass, href }) => (
  <div className="flex flex-col items-center rounded-md cursor-pointer hover:bg-neutral-800">
    <li
      className={`relative w-full ${bgClass} bg-cover bg-center rounded-md border-[1px]`}
    >
      <NavigationMenuLink asChild>
        <a
          className="flex h-full w-full select-none flex-col justify-end rounded-md p-5 no-underline outline-none"
          href={href}
        ></a>
      </NavigationMenuLink>
    </li>
    <div className="p-2">
      <p className="font-semibold text-sm pb-1 pt-1">{title}</p>
      <p className="text-[10px] text-justify">{description}</p>
    </div>
  </div>
);

export default NavItemCard;
