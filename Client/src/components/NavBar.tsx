import { useState } from "react";
import logo from "../assets/HomeRes/Logo.png";
import menuImg from "../assets/HomeRes/Menu.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const handlePlayerClick = () => {
    navigate("/players");
    setShowOptions(false);
  };
  const handleTeamClick = () => {
    navigate("/Teams");
    setShowOptions(false);
  };
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="Navbar bg-white h-12 flex items-center lg:justify-between">
      {/* Desktop */}
      {/* Logo for Dekstop */}
      <div className="hidden lg:block">
        <img
          onClick={() => handleLogoClick()}
          src={logo}
          className="h-14 w-auto cursor-pointer"
          alt="Logo"
        />
      </div>

      {/* Options for Desktop */}
      <div className="options hidden lg:flex items-center list-none gap-12">
        <li
          onClick={() => handlePlayerClick()}
          className="hover:tracking-widest hover:underline rounded-md p-0.5 cursor-pointer"
        >
          <div className="p-1 rounded-md ">Players</div>
        </li>
        <li
          onClick={() => handleLogoClick()}
          className="hover:tracking-widest hover:underline rounded-md p-0.5 cursor-pointer"
        >
          <div className="p-1 rounded-md ">Home</div>
        </li>
        <li
          onClick={() => handleTeamClick()}
          className=" hover:tracking-widest hover:underline rounded-md p-0.5 cursor-pointer"
        >
          <div className="p-1 rounded-md">Teams</div>
        </li>
      </div>

      <div className="hidden lg:block">
        <img
          onClick={() => handlePlayerClick()}
          src={logo}
          className="h-14 w-auto cursor-pointer"
          alt="Logo"
        />
      </div>

      {/* Logo for small screens */}
      <div className="lg:hidden ml-auto mr-auto lg:mr-0">
        <img
          onClick={() => handleLogoClick()}
          src={logo}
          className="h-16 cursor-pointer"
          alt="Logo"
        />
      </div>

      {/* Options for small screens */}
      <div className="lg:hidden flex justify-end">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="p-1 mr-1 cursor-pointer"
        >
          <img src={menuImg} alt="" />
        </button>
        {showOptions && (
          <div className="absolute z-10 right-0 mt-10 w-48 bg-white rounded-md shadow-lg">
            <ul className="py-1">
              <li
                onClick={() => handlePlayerClick()}
                className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
              >
                Players
              </li>
              <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                Home
              </li>
              <li
                onClick={() => handleTeamClick()}
                className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
              >
                Teams
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
