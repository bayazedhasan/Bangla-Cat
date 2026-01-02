import React from 'react';
import bg from "../../../../public/assetes/Parts/10001.jpg";
import { NavLink } from "react-router";
const PartsComponents = () => {
    return (
        <div>
            {/* HERO */}
            <div
                className="h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 container mx-auto px-4 md:px-10 lg:px-25 text-white">
                    <div className="flex gap-2 font-extrabold text-lg md:text-xl pt-5 pb-10">
                        <NavLink to="/"><p className="cursor-pointer">HOME</p></NavLink>
                        <p>/</p>
                        <NavLink to="/parts"><p className="cursor-pointer">PARTS</p></NavLink>
                    </div>

                    <div className="font-extrabold text-2xl md:text-3xl lg:text-4xl mt-12">
                        <p>Parts</p>
                        <div className="border-b-4 border-[#FAB600] w-12 my-2"></div>
                        <p className="text-base md:text-lg lg:text-xl pt-3 max-w-4xl">
                            Our product lines set the standard for our industry! We plan to help you meet your needs with our products, with our distribution and product support system, and the continual introduction and updating of our products.
                        </p>
                    </div>
                </div>
            </div>
            {/* product */}
<div className="container mx-auto lg:px-25 my-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    <div className="text-center">
      <img className="w-full max-w-[300px] mx-auto border border-gray-300" src="/assetes/Parts/10002.jpg" alt="Cat Parts" />
      <p className="text-xl font-extrabold pt-3">Cat Parts</p>
    </div>

    <div className="text-center">
      <img className="w-full max-w-[300px] mx-auto border border-gray-300" src="/assetes/Parts/10003.jpg" alt="Filters" />
      <p className="text-xl font-extrabold pt-3">Filters</p>
    </div>

    <div className="text-center">
      <img className="w-full max-w-[300px] mx-auto border border-gray-300" src="/assetes/Parts/10004.jpg" alt="Oil" />
      <p className="text-xl font-extrabold pt-3">Oil</p>
    </div>

    <div className="text-center">
      <img className="w-full max-w-[300px] mx-auto border border-gray-300" src="/assetes/Parts/10009.jpg" alt="Hydraulics" />
      <p className="text-xl font-extrabold pt-3">Hydraulics</p>
    </div>

    <div className="text-center">
      <img className="w-full max-w-[300px] mx-auto border border-gray-300" src="/assetes/Parts/10005.jpg" alt="Ground Engaging Tools" />
      <p className="text-xl font-extrabold pt-3">Ground Engaging Tools</p>
    </div>

    <div className="text-center">
      <img className="w-full max-w-[300px] mx-auto border border-gray-300" src="/assetes/Parts/10006.jpg" alt="Engine Parts" />
      <p className="text-xl font-extrabold pt-3">Engine Parts</p>
    </div>

    <div className="text-center">
      <img className="w-full max-w-[300px] mx-auto border border-gray-300" src="/assetes/Parts/10007.jpg" alt="Reman Parts" />
      <p className="text-xl font-extrabold pt-3">Reman Parts</p>
    </div>

    <div className="text-center">
      <img className="w-full max-w-[300px] mx-auto border border-gray-300" src="/assetes/Parts/10008.jpg" alt="Undercarriage" />
      <p className="text-xl font-extrabold pt-3">Undercarriage</p>
    </div>

  </div>
</div>

        </div>
    );
};

export default PartsComponents;