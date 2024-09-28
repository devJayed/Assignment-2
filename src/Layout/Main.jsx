import Banner from "../Components/Banner";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import FoodItems from "../Components/FoodItems";
import { useState } from "react";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("Potato");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="mx-auto max-w-screen-lg px-2">
      {/* Navbar section   */}
      <Navbar onCategoryClick={handleCategoryClick}></Navbar>
      <Banner></Banner>
      <FoodItems category={selectedCategory}></FoodItems>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default Main;
