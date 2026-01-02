import React from "react";
import bg from "../../../../public/assetes/service/10001.jpg";
import { NavLink } from "react-router";

const ServiceComponent = () => {
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
                        <NavLink to="/services"><p className="cursor-pointer">SERVICES</p></NavLink>
                    </div>

                    <div className="font-extrabold text-2xl md:text-3xl lg:text-4xl mt-12">
                        <p>Services</p>
                        <div className="border-b-4 border-[#FAB600] w-12 my-2"></div>
                        <p className="text-base md:text-lg lg:text-xl pt-3 max-w-4xl">
                            Our product lines set the standard for our industry! We plan to help you meet your needs with our products, with our distribution and product support system, and the continual introduction and updating of our products.
                        </p>
                    </div>
                </div>
            </div>

            {/* SERVICES ICON SECTION */}
            <div className="bg-[#E8E8E8] py-12">
                <div className="container mx-auto px-4 md:px-10 lg:px-25">
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        <div className="flex flex-col items-center gap-5 text-center">
                            <img src="assetes/service/10002.svg" alt="" />
                            <p className="text-lg font-bold text-black max-w-sm">
                                We are committed in providing industry leading customer service that is delivered by a team of experienced and reliable engineers and service personnel.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-5 text-center">
                            <img src="assetes/service/10003.svg" alt="" />
                            <p className="text-lg font-bold text-black max-w-sm">
                                Our service team is available for on-site and emergency services 24 hours a day, seven days a week, nationwide satellite office and is under constant training to update themselves.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-5 text-center">
                            <img src="assetes/service/10004.svg" alt="" />
                            <p className="text-lg font-bold text-black max-w-md">
                                Each of our teams has access to a comprehensive library of technical data, manuals and bulletins and are equipped with special purpose Caterpillar tools and computerized diagnostic equipment to provide fast, accurate troubleshooting, and repair support and solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* WORKSHOP SECTION */}
            <div className="container mx-auto px-4 md:px-10 lg:px-25 my-10">
                <div className="bg-[#E8E8E8] py-20 px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-xl">
                                WORKSHOP: OVERHAULING, REPAIRING, REBUILDING & S.O.S TESTING FACILITY
                            </h1>
                            <div className="border-b-4 border-[#FAB600] w-12 my-3"></div>
                            <p className="pt-2 font-semibold text-base md:text-lg max-w-2xl">
                                Our Workshop at Ashulia is recognized as "Caterpillar Certified Contamination Control facility" by Caterpillar Inc. Our experts ensure premium services to extend the life of power generator sets and equipment.
                            </p>
                        </div>

                        <div>
                            <img
                                className=""
                                src="assetes/service/10005.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceComponent;
