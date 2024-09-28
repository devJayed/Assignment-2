const Banner = () => {
  return (
    <div className="carousel w-full max-w-6xl mx-auto mt-2 rounded-lg shadow-lg">
      {/* Carousel Item 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="./images/carosol-1.jpg"
          alt="Food 1"
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent text-white w-full">
          <h2 className="text-4xl font-bold mb-2">Delicious Potato Dishes</h2>
          <p className="text-lg">
            Try our variety of crispy and spicy potato meals!
          </p>
        </div>
        <div className="absolute flex justify-between w-full transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-gray-100">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-gray-100">
            ❯
          </a>
        </div>
      </div>

      {/* Carousel Item 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="./images/carosol-2.jpg"
          alt="Food 2"
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent text-white w-full">
          <h2 className="text-4xl font-bold mb-2">Hot and Tasty Soups</h2>
          <p className="text-lg">
            Warm yourself up with our delicious soup collection.
          </p>
        </div>
        <div className="absolute flex justify-between w-full transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-gray-100">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-gray-100">
            ❯
          </a>
        </div>
      </div>

      {/* Carousel Item 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="./images/carosol-3.jpg"
          alt="Food 3"
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent text-white w-full">
          <h2 className="text-4xl font-bold mb-2">Juicy Chicken Specials</h2>
          <p className="text-lg">
            Enjoy the best chicken dishes cooked to perfection!
          </p>
        </div>
        <div className="absolute flex justify-between w-full transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-gray-100">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-gray-100">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
