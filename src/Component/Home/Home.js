import React from 'react';
import './Home.css';
import useComments from '../hooks/useComments';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
const Home = () => {
    /* use custom useState for abort code duplicated */
    const [comments] = useComments();
    /* separated three Review commnets of array for showing home page  */
    const speicalComments = comments.slice(0, 3);
    return (
        <>
            <div className='md:px-16 py-8 bg-cyan-100 h-[90vh]  grid grid-cols-1 md:grid-cols-2 gap-4 justify-end items-center '>
                <div className='flex  explore-btn order-2 md:order-2'>
                    <div className='justify-end items-center p-8'>
                        <h1 className='font-mono text-xl md:text-5xl '>
                            <span className='font-bold'>“It’s Just So Dark and </span><span className='text-orange-500 font-bold'>Terrifying</span><span className='font-bold'>”: </span><br /><span className='md:text-4xl'>The Voices Behind</span> <br /> <span className='text-orange-500 font-bold'>Attack On Titan’s </span><br /> <span className='md:text-4xl'>Final Season</span><span className='text-6xl'>☕</span>
                        </h1>
                        <button className='py-4 px-7 text-white mt-3 text-2xl rounded-full bg-cyan-600 '>
                            Watch Now
                        </button>
                    </div>
                </div>
                <div className='w-full h-full rounded-lg flex items-center justify-center oder-1 md:order-2'>
                    <img src="https://i.ibb.co/xftQCp9/recs-attackontitan2-removebg-preview.png" alt="" />
                </div>
            </div>


            {/* customer review section */}
            <div className='flex flex-col justify-around items-center md:h-[100vh]'>
                <div className='px-20'>
                    <h1 className='text-center text-5xl my-10'>Customer Reviews</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            speicalComments.map(comment => <Review key={comment._id} comment={comment}></Review>)
                        }
                    </div>
                </div>
                <br />
                <Link to='/reviews' className='py-4 px-7 text-white mt-3 text-2xl  rounded-full bg-cyan-600 '>
                    More Review
                </Link>

            </div>
        </>
    );
};

export default Home;        