import React from 'react';

const Newsletter = () => {
    return (
        <div className='container mx-auto'>
            <div className=' mb-30 relative bg-white/10 p-5 rounded-3xl border border-white mb-[-150px] z-10'>
                <div className='bg-white p-30 flex flex-col items-center rounded-3xl'>
                    <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                    <p className='text-xl py-3'>Get the latest updates and news right in your inbox!</p>
                    <fieldset className="w-full max-w-sm mx-auto sm:mx-0">
                        
                        <div className="join mt-5 w-full">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="mr-2 input input-bordered join-item w-full " />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;