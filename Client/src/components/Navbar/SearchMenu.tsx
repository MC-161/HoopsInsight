import ListItemWithLink from "@/pages/utils/ListItemWithLink"
import { Search } from "lucide-react";
import { useState } from "react";




const SearchMenu = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center cursor-pointer"
      >
        <Search fontSize="large" />
        <span>Search</span>
      </div>

      {/* Conditional rendering for the Player and Team search links */}
      {isOpen && (
        <div className="flex flex-col justify-center items-center gap-4">
          <ListItemWithLink
            to="/search/player"
            icon={<Search fontSize="large" />}
            primaryText="Player Search"
            className="flex flex-col justify-center items-center"
          
          />
          <ListItemWithLink
            to="/search/team"
            icon={<Search fontSize="large" />}
            primaryText="Team Search"
            className="flex flex-col justify-center items-center"
          />
        </div>
      )}
    </>
  );
};

export default SearchMenu;