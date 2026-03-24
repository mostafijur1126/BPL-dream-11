import React from 'react';
import bannerImg from "../../../assets/banner-main.png"
const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className=" h-[450px] rounded-3xl flex  items-center justify-center text-center relative overflow-hidden
              bg-gradient-to-r from-indigo-500 via-black to-[#c79a8d]">
                <div className="flex flex-col items-center z-10 px-6">
                    <img src={bannerImg} alt="Cricket Logo" className="mx-auto mb-6 w-32" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-gray-400 text-lg mb-8">Beyond Boundaries Beyond Limits</p>
                    <button className="px-8 py-3 rounded-xl font-semibold text-black
                     bg-lime-400 hover:bg-lime-300
                     shadow-[0_0_20px_rgba(163,230,53,0.7)]
                     transition duration-300">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;