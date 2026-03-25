import React from 'react';
import footerImg from "../../assets/logo-footer.png"
const Footer = () => {
    return (
        <div className='bg-[#06091A]'>
            <div className="">
                <img className='mx-auto' src={footerImg} alt="" />
                <footer className="grid grid-cols-3 container mx-auto footer sm:footer-horizontal text-base-content p-10">
                    <nav className='text-white'>
                        <h6 className="footer-title text-2xl">About Us</h6>
                        <p className='text-gray-400'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                    </nav>
                    <nav className='text-gray-400'>
                        <h6 className="footer-title text-2xl text-gray-50">Quick Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    <form className='text-left'>
                        <h6 className="footer-title text-white text-2xl">Subscribe</h6>
                        <fieldset className="w-80">
                            <label className='text-gray-400'>Subscribe to our newsletter <br /> for the latest updates.</label>
                            <div className="join mt-7">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item rounded-l-2xl" />
                                <button className="btn btn-primary join-item rounded-r-2xl">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>

            </div>
            <div className="divider h-[1px] m-0 bg-gray-500"></div>
            <div className='text-center py-3'>
                <p className='text-gray-400'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;