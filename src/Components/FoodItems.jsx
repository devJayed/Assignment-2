import React, { useEffect, useState } from "react";

const FoodItems = ({ category }) => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    if (category) {
      setLoading(true); // Set loading to true before fetching
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
        .then((response) => response.json())
        .then((data) => {
          setFoodData(data.meals || []);
        })
        .finally(() => {
          setLoading(false); // Set loading to false after fetching
        });
    }
  }, [category]);

  return (
    <div className="max-w-6xl mx-auto p-4 mt-20">
      {loading ? (
        <div className="flex justify-center mt-10">
          {/* Medium Circular Spinner */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {foodData.map((item) => (
            <div key={item.idMeal} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-2">{item.strMeal}</h3>
              <p>{item.strCategory}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodItems;
