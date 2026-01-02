import React from "react";
import bg from "../../../../public/assetes/service/10001.jpg";
import { NavLink } from "react-router";

const ServiceComponent = () => {
    return (
        <div>
            <div
                className="h-[450px] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bg})` }}
            >

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 container mx-auto px-25 text-white">
                    <div className="flex gap-2 font-extrabold text-xl  pt-5 pb-25">
                        <NavLink to="/"><p className="cursor-pointer">HOME</p></NavLink>
                        <p>/</p>
                        <NavLink to="/services"><p className="cursor-pointer">SERVICES</p></NavLink>
                    </div>

                    <div className="font-extrabold text-4xl mt-4">
                        <p>Services</p>
                        <div className="border-b-4 border-[#FAB600] w-15 my-2"></div>
                        <p className="text-xl pt-3">
                            Our product lines set the standard for our industry! We plan to help you meet your needs with our products, with our distribution and product support system, and the continual introduction and updating of our products.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#E8E8E8] h-140">
                <div className="flex justify-between container mx-auto px-25 py-30 gap-12">
                    <div className="flex flex-col items-center gap-5 ">
                        <img src="assetes/service/10002.svg" alt="" />
                        <div>
                            <p className="text-lg font-bold text-black w-90">We are committed in providing industry leading customer service that is delivered by a team of experienced and reliable engineers and service personnel.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <img src="assetes/service/10003.svg" alt="" />
                        <div>
                            <p className="text-lg font-bold text-black w-90">Our service team is available for on-site and emergency services 24 hours a day, seven days a week, nationwide satellite office and is under constant training to update themselves.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <img src="assetes/service/10004.svg" alt="" />
                        <div>
                            <p className="text-lg font-bold text-black w-115">Each of our teams has access to a comprehensive library of technical data, manuals and bulletins and are equipped with special purpose Caterpillar tools and computerized diagnostic equipment to provide fast, accurate troubleshooting, and repair support and solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="bg-[#E8E8E8] h-130 my-10 flex items-center mx-25">
                <div className="flex justify-between px-12 items-center">
                    <div>
                        <h1 className="text-4xl font-bold w-130">WORKSHOP: OVERHAULING, REPAIRING, REBUILDING & S.O.S TESTING FACILITY</h1>
                        <div className="border-b-4 border-[#FAB600] w-15 my-2"></div>
                        <p className="pt-1 font-semibold text-lg w-160">Our Workshop at Ashulia is recognized as "Caterpillar Certified Contamination Control facility" by Caterpillar Inc. Our experts ensure premium services to extend the life of power generator sets and equipment.</p>
                    </div>
                    <div>
                        <img className="" src="assetes/service/10005.jpg" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceComponent;
