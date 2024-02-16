import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center mt-[80px] "
      style={{
        backgroundImage:
          "url('https://sundayguardianlive.com/wp-content/uploads/2022/12/Indian-Cuisine-Fifth-Best-In-The-World.jpg')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto text-center bg-gray-200 bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="  text-6xl font-bold mb-4 overflow-hidden animate__animated animate__fadeIn ">
          Food Court
        </h1>
        <p className="text-xl text-gray-700 mb-8 ">
          Experience taste of India at your home from our website
        </p>
        <Link to="/">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-110">
            Order Now
          </button>
        </Link>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg"
              alt="Food 1"
              className="rounded-lg mb-2 h-[150px] w-[230px]"
            />
            <h2 className="text-lg font-semibold">Vada Pav</h2>
            <p className="text-sm text-gray-700">
              Try our mouthwatering Vada Pav!
            </p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg"
              alt="Food 2"
              className="rounded-lg mb-2"
            />
            <h2 className="text-lg font-semibold">Fresh Pizzas</h2>
            <p className="text-sm text-gray-700">
              Healthy and delicious Pizzas!
            </p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
              src="https://www.foodandwine.com/thmb/ckc6L6xKox0WfpfO6dMkuVGPQOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Angel-Food-Cake-with-Three-Berry-Compote-FT-RECIPE0323-541a780b871441e0ab14383ee38acc44.jpg"
              alt="Food 3"
              className="rounded-lg mb-2"
            />
            <h2 className="text-lg font-semibold">Decadent Desserts</h2>
            <p className="text-sm text-gray-700">
              Indulge in our sweet treats!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
