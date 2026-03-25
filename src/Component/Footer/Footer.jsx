import React from 'react';
import footerImg from "../../assets/logo-footer.png"
const Footer = () => {
    return (
        <div className='bg-[#06091A]'>
            <div className="">
                <img className='mx-auto px-4' src={footerImg} alt="" />
                <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-6 py-10 text-base-content">
                    <nav className='text-white text-center sm:text-left'>
                        <h6 className="footer-title text-2xl mb-2">About Us</h6>
                        <p className='text-gray-400'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </nav>
                    <nav className='text-gray-400 text-center sm:text-left'>
                        <h6 className="footer-title text-2xl text-gray-50 mb-2">Quick Links</h6>
                        <div className='flex flex-col gap-1'>
                            <a className="link link-hover">Home</a>
                            <a className="link link-hover">Services</a>
                            <a className="link link-hover">About</a>
                            <a className="link link-hover">Contact</a>
                        </div>
                    </nav>

                    <form className='text-center sm:text-left'>
                        <h6 className="footer-title text-white text-2xl mb-2">Subscribe</h6>
                        <fieldset className="w-full max-w-sm mx-auto sm:mx-0">
                            <label className='text-gray-400'>Subscribe to our newsletter <br /> for the latest updates.</label>
                            <div className="join mt-5 w-full">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item w-full rounded-l-2xl" />
                                <button className="btn btn-primary join-item rounded-r-2xl">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>

            </div>
            <div className="h-[1px] bg-gray-500"></div>
            <div className='text-center py-4 px-4'>
                <p className='text-gray-400 text-sm sm:text-base'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;