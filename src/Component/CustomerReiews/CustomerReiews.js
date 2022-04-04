import React from 'react';
import useComments from '../hooks/useComments';
import Review from '../Review/Review';

const CustomerReiews = () => {
    /* custom hook for looding comments for api and then load */
    const [comments] = useComments();
    return (
        <div className=''>
            <h1 className='text-center text-5xl mt-10'>User Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-20'>
                {
                    comments.map(comment => <Review key={comment._id} comment={comment}></Review>)
                }
            </div>
        </div>
    );
};

export default CustomerReiews;