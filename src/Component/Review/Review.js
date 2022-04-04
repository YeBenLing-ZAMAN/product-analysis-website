import React from 'react';

const Review = ({comment}) => {
    const {name,email,comments,rating,picture} =comment;
    return (
        <div className="p-8 bg-cyan-200 w-full rounded-lg shadow-lg flex ">
                    <div className=" p-4 bg-gray-100 rounded-lg">
                        <div className="flex flex-col md:flex-row items-center">
                            <img className="h-24 w-24 rounded-full" src={picture} alt="" />
                            <div className="p-3">
                                {/* <h1 className="text-base font-medium">written by</h1> */}
                                <h1 className=" text-base font-medium"><span className='text-xl font-bold'>{name}</span> || <span className="underline underline-offset-1">{email}</span></h1>
                                <h1 className="text-base ">Rating: <span className="font-bold">{rating}</span></h1>
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