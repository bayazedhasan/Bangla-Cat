import React from 'react';

const CatCard = () => {
    return (
       <div className='container mx-auto px-25 '>
         <div className='flex justify-center items-center my-20'>
            <div>
                <h1 className='text-2xl font-bold pb-2'>CAT® H SERIES GAS GENERATORS THE NEW HIGHLY EFFICIENT H SERIES</h1>
                <p className='text-md font-semibold w-150 mb-4'>The G3520H, G3516H, G3512H natural gas generators are included in the new highly efficient H Series. In these category of gas engines, the enabling technologies deliver electric power up to 2500 kWe at 45.3% electrical</p>
                <div className='border duration-300 cursor-pointer w-55 text-center text-MD font-bold hover:text-black p-2  hover:bg-[#FAB600]  hover:border-gray-300'>
                    <button className=' cursor-pointer'>VIEW SPECIFICATIONS</button>
                </div>
            </div>
            <div className='bg-[url(/assetes/shape.png)] bg-cover w-full h-100 bg-center'>
                <img className='w-150 pt-15 pl-10 hover:scale-105 duration-300' src="/assetes/product-1.png" alt="" />
            </div>
        </div>
         <div className='flex justify-between gap-10 items-center my-20'>
            <div className='bg-[url(/assetes/shape.png)] bg-cover w-full h-100 bg-center'>
                <img className='w-150 pt-20 pl-50 hover:scale-105 duration-300' src="/assetes/Parts-C10398867.png" alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold pb-2'>GENUINE CAT® PARTS GET IT WHEN YOU NEED IT…</h1>
                <p className='text-md font-semibold w-150 mb-4'>As a proud dealer of Caterpillar, we, from BanglaCAT, maintain adequate inventory of replacement parts to ensure the best possible availability. Cat parts are constructed of top-quality materials, built to exact original specifications by</p>
                <div className='border duration-300 cursor-pointer w-55 text-center text-MD font-bold hover:text-black p-2  hover:bg-[#FAB600]  hover:border-gray-300'>
                    <button className=' cursor-pointer'>Learn More</button>
                </div>
            </div>
        </div>
         <div className='flex justify-center items-center my-20'>
            <div>
                <h1 className='text-2xl font-bold pb-2'>CAT® C32B HIGH PERFORMANCE PROPULSION ENGINE 4000 BHP @2300 RPM ENGINE</h1>
                <p className='text-md font-semibold w-150 mb-4'>Perfect choice for fishing boats, yachts or any larger vessel that demands a high-performance engine!</p>
                <div className='border duration-300 cursor-pointer w-55 text-center text-MD font-bold hover:text-black p-2  hover:bg-[#FAB600]  hover:border-gray-300'>
                    <button className=' cursor-pointer'>Learn More</button>
                </div>
            </div>
            <div className='bg-[url(/assetes/shape.png)] bg-cover w-full h-100 bg-center'>
                <img className='w-150 pt-20 pl-50 hover:scale-105 duration-300' src="/assetes/CM20200807-cdcc0-f13c1.png" alt="" />
            </div>
        </div>
         <div className='flex justify-center items-center  my-20'>
            <div className='bg-[url(/assetes/shape.png)] bg-cover w-full h-100 bg-center'>
                <img className='w-180 pt-10 pl-60 hover:scale-105 duration-300' src="/assetes/DP35-PT-1000x1000.png.png" alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold pb-2'>CAT® DP30P COMPACT & DURABLE FORKLIFT TRUCKS</h1>
                <p className='text-md font-semibold w-150 mb-4'>CAT Lift Trucks deliver unwavering productivity with robust design and user-friendly features. Featuring reliable diesel engines, these forklifts ensure consistent power, high strength, traction on various surfaces, and exceptional</p>
                <div className='border duration-300 cursor-pointer w-55 text-center text-MD font-bold hover:text-black p-2  hover:bg-[#FAB600]  hover:border-gray-300'>
                    <button className=' cursor-pointer'>VIEW SPECIFICATIONS</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default CatCard;