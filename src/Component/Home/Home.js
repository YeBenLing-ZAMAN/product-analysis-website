import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <>
            <div className='md:px-16 py-8 bg-cyan-100 h-[90vh]  grid grid-cols-1 md:grid-cols-2 gap-4 justify-end items-center '>
                <div className='flex  explore-btn order-2 md:order-2'>
                    <div className='justify-end items-center p-8'>
                        <h1 className='font-mono text-xl md:text-5xl '>
                            “It’s Just So Dark and Terrifying”: <br /> The Voices Behind Attack On Titan’s Final Season<span className='text-6xl'>☕</span>
                        </h1>
                        <button className='py-4 px-7 text-white mt-3 text-2xl rounded-full bg-cyan-600 '>
                            Explore Coins
                        </button>
                    </div>
                </div>
                <div className='w-full h-full rounded-lg flex items-center justify-center oder-1 md:order-2'>
                    <img src="https://i.ibb.co/xftQCp9/recs-attackontitan2-removebg-preview.png" alt="" />
                </div>
            </div>


            {/* customer review section */}
            <div>
                <h1 className='text-center text-5xl my-10'>Customer Reviews</h1>

                
                <div className="p-8 bg-cyan-200 w-1/3">
                    <div className=" p-4 bg-gray-100">
                        <div className="flex items-center">
                            <img className="h-24 w-24 rounded-full" src="https://i.ibb.co/xftQCp9/recs-attackontitan2-removebg-preview.png" alt="" />
                            <div className="p-3">
                                <h1 className="text-xl font-bold">written by</h1>
                                <h1 className=" text-base font-medium"><span>Daniel kurland</span> || <span className="underline underline-offset-1">@DanielKurlansky</span></h1>
                                <h1 className="text-base ">rating: <span className="font-bold">5 star</span></h1>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ad quisquam esse corrupti aliquam culpa suscipit eaque, quas necessitatibus sunt. Nemo, dicta magnam accusantium odit deserunt non minus earum pariatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;        