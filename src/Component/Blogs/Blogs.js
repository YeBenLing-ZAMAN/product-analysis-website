import React from 'react';

const Blogs = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl  md:px-2 bg-cyan-200'>
            <div className='grid grid-cols-1 gap-24 md:grid-cols-2 px-16'>
                <div>
                    <h1 className='mb-6 text-xl font-blod text-gray-900 md:text-4xl'>
                        Questions and Answer
                    </h1>
                    <p className='mt-10 mb-3 font-semibold text-gray-900 text-xl'>
                        what is  React Context API ?
                    </p>
                    <p className='text-gray-600'>
                        we know that react is better for it profomance. The one secrets is one-way data bindings. But in here some problem are occur when if we though data in route and subroute component then all component are need to <strong>"Prop Drilling"</strong>.And it not effecient. So, solve this problem they have Context API in react.
                        <br />
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around.Context is designed to share data that can be considered <strong>“global” for a tree of React components </strong>and then in side router components can easily acesses.
                    </p>
                    <p className='mt-10 mb-3 font-semibold text-gray-900 text-xl'>
                        what is symantic tag ?
                    </p>
                    <p className='text-gray-600'>
                        In HTML symantic tag clearly describles its meaning. There are have symantic and non-symantic tag. at first looking "Non-symantic" tag are not to understandable what content took it.
                        <br />
                        But "Symantic tag" easy to understand what content it took.
                        A great deal of web content can be made accessible just by making
                        sure the correct HTML elements are always used for the correct
                        purpose.
                        <br />
                        <span className='font-bold mx-5'>symantic Examples:</span>
                        <li className='mx-8'>&lt;main&gt;</li>
                        <li className='mx-8'>&lt;header&gt;</li>
                        <li className='mx-8'>&lt;article&gt;</li>
                        <li className='mx-8'>&lt;table&gt;</li>
                        <li className='mx-8'>&lt;form&gt;</li>
                    </p>
                    <p className='mt-10 mb-3 font-semibold text-gray-900 text-xl'>
                        Different between block element and inline element ?
                    </p>
                    <p className='text-gray-600 '>
                        inline and block element are every improtant of web development.
                        <br />
                        <strong>Block elements</strong> are occupy the entire width avaible irrespective of their sufficiency.And also they always start a new line with top and bottom margins. And it does not eontain any other elements next to it.
                        <br />
                        <strong>Inline elements</strong> occupy only the enough width that is sufficient to have its and allows other elements next to it which are inline elements. And also most improtant thing is they don't have top and bottom margins.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;