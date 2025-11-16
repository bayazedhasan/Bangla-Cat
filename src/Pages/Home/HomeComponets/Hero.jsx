import React from 'react';

const Hero = () => {
    return (
        <div >
            <div>
                <div className="reletive carousel w-full h-[70vh]">
                    
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://i.postimg.cc/44DKX8MS/Slide-1.jpg"
                            className="w-full h-[70vh] object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://i.postimg.cc/nVysndg8/Slide-2.jpg"
                            className="w-full h-[70vh] object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://i.postimg.cc/WpBDs9KQ/Slide-3.jpg"
                            className="w-full h-[70vh] object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://i.postimg.cc/Kc6Km9wS/Slide-4.jpg"
                            className="w-full h-[70vh] object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://i.postimg.cc/gcCwGM51/Slide-5.jpg"
                            className="w-full h-[70vh] object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://i.postimg.cc/Df9W7CHn/Slide-6.jpg"
                            className="w-full h-[70vh] object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div className='  absolute flex flex-col left-60 top-3/12 h-full '>
                        <p className='text-[#FAB600] text-lg font-bold'>Gas Genset H Series</p>
                        <h1 className='text-5xl font-bold py-2 text-[#FFFFFF]'>Keep the Power On!</h1>
                        <p className='text-xl w-130 leading-8 font-semibold pb-4 text-[#FFFFFF]'>Experience and Expertise meeting various commercial & industrial electric power needs!</p>
                        <div className='border duration-300 cursor-pointer w-45 text-center text-sm font-bold hover:text-black p-2  hover:bg-[#FAB600] border-[#FFFFFF] hover:border-gray-300'>
                            <button className=' cursor-pointer text-[#FFFFFF]'>GET INFORMATION</button>
                        </div>
                    </div>
                </div>
                
            </div>

            
        </div>
    );
};

export default Hero;