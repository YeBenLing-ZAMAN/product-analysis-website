import React from 'react';
import './Home.css';
import useComments from '../hooks/useComments';
import Review from '../Review/Review';
const Home = () => {
    const [comments] = useComments();
    const speicalComments = comments.slice(0, 3);
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
            <div className='flex flex-col justify-around items-center md:h-[100vh]'>
                <div>
                    <h1 className='text-center text-5xl my-10'>Customer Reviews</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            speicalComments.map(comment => <Review key={comment._id} comment={comment}></Review>)
                        }
                    </div>
                </div>

                <br />

                <button className='py-4 px-7 text-white mt-3 text-2xl  rounded-full bg-cyan-600 '>
                    More Review
                </button>

            </div>
        </>
    );
};

export default Home;        