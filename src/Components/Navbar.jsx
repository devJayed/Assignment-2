import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle
  const [foodData, setFoodData] = useState([]); // State to store food data

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to fetch food data from TheMealDB API
  const fetchFoodData = async (category) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`
      );
      setFoodData(response.data.meals); // Store API data in state
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };

  return (
    <div>
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
            <button
              onClick={() => fetchFoodData("Potato")}
              className="btn btn-outline"
            >
              Potato
            </button>
            <button
              onClick={() => fetchFoodData("Soup")}
              className="btn btn-outline"
            >
              Soup
            </button>
            <button
              onClick={() => fetchFoodData("Chicken")}
              className="btn btn-outline"
            >
              Chicken
            </button>
            <button
              onClick={() => fetchFoodData("Beef")}
              className="btn btn-outline"
            >
              Beef
            </button>
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
      </nav>

      {/* Dropdown Menu for mobile */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <button
            onClick={() => fetchFoodData("Potato")}
            className="btn btn-outline block w-full"
          >
            Potato
          </button>
          <button
            onClick={() => fetchFoodData("Soup")}
            className="btn btn-outline block w-full"
          >
            Soup
          </button>
          <button
            onClick={() => fetchFoodData("Chicken")}
            className="btn btn-outline block w-full"
          >
            Chicken
          </button>
          <button
            onClick={() => fetchFoodData("Beef")}
            className="btn btn-outline block w-full"
          >
            Beef
          </button>
        </div>
      )}

      {/* Displaying the Food Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-64">
        {foodData && foodData.length > 0 ? (
          foodData.map((meal) => (
            <div
              key={meal.idMeal}
              className="card border p-4 rounded shadow-lg"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-lg font-bold">{meal.strMeal}</h2>
              <p className="text-gray-600">{meal.strCategory}</p>
              <p>{meal.strInstructions.substring(0, 100)}...</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No meals to display. Select a category above.
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
