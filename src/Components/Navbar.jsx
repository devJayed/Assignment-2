import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Website Name */}
        <div className="flex items-center">
          <img
            src="./logo.png" // Replace with your logo
            alt="Logo"
            className="w-16 h-16 mr-3"
          />
          <h1 className="text-xl font-bold">Foodie Heaven</h1>
        </div>

        {/* Food Category Buttons (for desktop) */}
        <div className="hidden md:flex space-x-4">
          <button className="btn btn-outline">Potato</button>
          <button className="btn btn-outline">Soup</button>
          <button className="btn btn-outline">Chicken</button>
          <button className="btn btn-outline">Beef</button>
        </div>

        {/* Hamburger Menu (for mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for mobile */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <button className="btn btn-outline block w-full">Potato</button>
          <button className="btn btn-outline block w-full">Soup</button>
          <button className="btn btn-outline block w-full">Chicken</button>
          <button className="btn btn-outline block w-full">Beef</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
