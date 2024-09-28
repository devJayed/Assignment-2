import Banner from "../Components/Banner";
import FAQ from "../Components/FAQ";
import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-2">
      {/* Navbar section   */}
      <Navbar></Navbar>
      <Banner></Banner>
      <FAQ></FAQ>
    </div>
  );
};

export default Main;
