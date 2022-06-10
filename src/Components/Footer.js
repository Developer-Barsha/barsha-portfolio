import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral text-white'>
            <footer className="footer px-10 py-5">
                <div>
                    <span className="footer-title">Address</span>
                    <li className="list-none">67/1 Nagoriakandi</li>
                    <li className="list-none">Narsingdi, Bangladesh</li>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <li className="list-none">(+880) 1323-271559</li>
                    <li className="list-none">programmer.barsha@gmail.com</li>
                </div>
                <div>
                    <span className="footer-title">Links</span>
                    <a href='#about' className="link link-hover">About Me</a>
                    <a href='#skills' className="link link-hover">Skills</a>
                </div>
            </footer>
            <footer className="footer items-center px-4 py-3 border-y">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2022 - Developer Barsha- All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <ul className='social flex gap-5'>
                        <li><a target='blank' href="https://www.linkedin.com/in/programmer-barsha/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a target='blank' href="https://www.facebook.com/programmer.barsha/"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a target='blank' href="/"><i className="fa-brands fa-github"></i></a></li>
                        <li><a target='blank' href="/"><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;