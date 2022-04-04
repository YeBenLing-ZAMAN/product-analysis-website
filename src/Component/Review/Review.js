import React from 'react';

const Review = ({comment}) => {
    const {name,email,comments,rating} =comment;
    return (
        <div className="p-8 bg-cyan-200 w-full">
                    <div className=" p-4 bg-gray-100">
                        <div className="flex items-center">
                            <img className="h-24 w-24 rounded-full" src="https://i.ibb.co/xftQCp9/recs-attackontitan2-removebg-preview.png" alt="" />
                            <div className="p-3">
                                <h1 className="text-base font-medium">written by</h1>
                                <h1 className=" text-base font-medium"><span className='text-xl font-bold'>{name}</span> || <span className="underline underline-offset-1">{email}</span></h1>
                                <h1 className="text-base ">rating: <span className="font-bold">{rating}</span></h1>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p>{comments}</p>
                        </div>
                    </div>
                </div>
    );
};

export default Review;