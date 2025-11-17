import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className="bg-[#DEE0E1] h-auto lg:h-162">
            <div className="container mx-auto px-5 lg:px-30 ">

                {/* FOLLOW US */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6 bg-[#FAB600] justify-center rounded-bl-xl rounded-br-xl p-4 w-full lg:w-130">
                        <h2 className="text-black text-xl lg:text-2xl font-bold">FOLLOW US</h2>
                        <div className="flex gap-4 items-center">
                            <a className="border rounded-full p-2 duration-300 hover:text-white" href=""><FaFacebook size={25} /></a>
                            <a className="border rounded-full p-2 duration-300 hover:text-white" href=""><FaInstagram size={25} /></a>
                            <a className="border rounded-full p-2 duration-300 hover:text-white" href=""><IoLogoYoutube size={25} /></a>
                            <a className="border rounded-full p-2 duration-300 hover:text-white" href=""><FaWhatsapp size={25} /></a>
                        </div>
                    </div>

                    <div className="text-center lg:text-end">
                        <h1 className="text-black text-xl lg:text-2xl py-4 hover:text-[#FAB600] font-bold">
                            Customer Care | 16448
                        </h1>
                        <div className="border border-gray-300 w-full lg:w-185"></div>
                    </div>
                </div>

                {/* MAIN GRID */}
                <div className="flex flex-col lg:flex-row justify-between pt-10 gap-10">
                    {/* Left Side Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 w-full lg:w-auto">

                        <div>
                            <h2 className="text-black text-xl lg:text-2xl font-extrabold mb-4 hover:text-[#FAB600]">Company</h2>
                            <div className="grid gap-1">
                                <a className="text-base lg:text-lg text-black hover:text-[#FAB600] font-bold" href="">About Us</a>
                                <a className="text-base lg:text-lg text-black hover:text-[#FAB600] font-bold" href="">Message from the Management</a>
                                <a className="text-base lg:text-lg text-black hover:text-[#FAB600] font-bold" href="">Vision, Mission & Values</a>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-black text-xl lg:text-2xl font-extrabold mb-4 hover:text-[#FAB600]">News & Media</h2>
                            <div className="flex flex-col gap-1">
                                <a className="text-base lg:text-lg text-black hover:text-[#FAB600] font-bold" href="">Media Releases</a>
                                <a className="text-base lg:text-lg text-black hover:text-[#FAB600] font-bold" href="">Newsletter</a>
                                <a className="text-base lg:text-lg text-black hover:text-[#FAB600] font-bold" href="">Business Updates</a>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-black text-xl lg:text-2xl font-extrabold mb-4 hover:text-[#FAB600]">Contact Us</h2>
                            <a className="text-xl lg:text-2xl text-black hover:text-[#FAB600] font-bold" href="">Locations</a>
                        </div>
                    </div>

                    {/* Right side form */}
                    <div className="bg-[#3F3F3F] p-6 lg:p-15 h-auto lg:h-155 w-full lg:w-auto rounded-lg lg:rounded-none">
                        <h1 className="text-white text-2xl lg:text-3xl font-extrabold pb-4 text-center lg:text-start">
                            Enquire Now!
                        </h1>

                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            className="w-full placeholder:text-lg lg:placeholder:text-xl 
                            placeholder:text-white placeholder:font-bold px-4 py-2
                            border-b border-gray-400 bg-transparent focus:ring-2 focus:ring-amber-300 focus:outline-none"
                        />

                        {/* Phone */}
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile/Phone*"
                            className="w-full placeholder:text-lg lg:placeholder:text-xl 
                            placeholder:text-white placeholder:font-bold px-4 py-2
                            border-b border-gray-400 bg-transparent mt-3 focus:ring-2 focus:ring-amber-300"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            className="w-full placeholder:text-lg lg:placeholder:text-xl 
                            placeholder:text-white placeholder:font-bold px-4 py-2
                            border-b border-gray-400 bg-transparent mt-3 focus:ring-2 focus:ring-amber-300"
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Message"
                            className="w-full placeholder:text-lg lg:placeholder:text-xl 
                            placeholder:font-bold px-4 py-3 border bg-white text-black mt-4
                            focus:ring-2 focus:ring-amber-300 resize-y"
                        ></textarea>

                        {/* Submit */}
                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-sm font-medium shadow transition mt-2">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col lg:flex-row justify-between items-center py-6 pt-10 gap-4 text-center lg:text-left">

                    <img className="w-40 md:w-52" src="/assetes/BanglaTrac.png" alt="" />

                    <h1 className="text-sm md:text-base">
                        2025 - BanglaCAT®. All rights reserved. Developed by Bangla Trac Group Brand Management.
                    </h1>

                    <Link to={"/"}>
                        <img className="w-16 md:w-20" src="/assetes/cat-icon.png" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
