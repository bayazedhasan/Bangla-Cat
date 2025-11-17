import React from 'react';
import useData from '../../hooks/useData';

const Stories = () => {
    const {storiesData} = useData()
  
    return (
        <div className='container mx-auto px-4 md:px-10 lg:px-30'>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold my-6 md:my-10'>Our Stories</h1>
            </div>

            {/* Responsive Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-10 md:my-15'>
                {
                    storiesData.map((s, idx) => (
                        <div key={idx} className='border border-gray-300 hover:scale-105 duration-300'>
                            <div className='overflow-hidden'>
                                <img 
                                    className='w-full h-48 md:h-60 lg:h-64 object-cover hover:scale-98 duration-300' 
                                    src={s.img} 
                                    alt={s.title} 
                                />
                            </div>
                            <div className='p-4'>
                                <h1 className='text-black text-lg md:text-xl pt-1'>{s.title}</h1>
                                <h2 className='text-black text-xl md:text-2xl font-bold py-2'>{s.name}</h2>
                                <p className='text-black text-base md:text-lg font-medium'>{s.description}</p>
                                <div className='border duration-300 cursor-pointer w-32 md:w-40 text-center text-sm md:text-lg font-bold hover:text-black p-2 mt-2 hover:bg-[#FAB600] hover:border-gray-300'>
                                    <button>{s.readMoreUrl}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Stories;
