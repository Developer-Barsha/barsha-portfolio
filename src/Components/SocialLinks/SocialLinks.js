import React, { useState } from 'react';

const SocialLinks = () => {
    const [show, setShow] = useState(true);

    return (
        <div className='absolute bottom-0' style={{ zIndex: 10000 }}>
            <div className='flex gap-3 fixed bottom-2 p-3 right-3 text-xl text-primary'>
                <label className="swap text-center text-2xl w-10 h-10 text-white py-2 px-3 bg-primary mb-3 rounded-full">
                    <input type="checkbox" onClick={() => setShow(!show)} />
                    <div className="swap-on"><i className="fa-solid fa-eye"></i></div>
                    <div className="swap-off"><i className="fa-solid fa-circle-xmark"></i></div>
                </label>
                {
                    show &&
                    <ul className='flex flex-col social justify-center bottom-2 p-3 right-3 text-xl bg-purple-200 shadow-gray-900 rounded gap-4 text-primary'>
                        <li><a target='blank' href="https://www.linkedin.com/in/programmer-barsha/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a target='blank' href="https://www.facebook.com/programmer.barsha/"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a target='blank' href="/"><i className="fa-brands fa-github"></i></a></li>
                        <li><a target='blank' href="/"><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>}
            </div>
            {/* <ul className='flex flex-col social justify-center bg-purple-200 shadow-gray-900 rounded gap-4 text-primary'>

                <label className="swap text-2xl text-white">
                    <input type="checkbox" onClick={() => setShow(!show)} />
                    <div className="swap-on"><i className="fa-solid fa-eye"></i></div>
                    <div className="swap-off"><i className="fa-solid fa-circle-xmark"></i></div>
                </label>
                {
                    show &&
                    <>
                        <li><a target='blank' href="https://www.linkedin.com/in/programmer-barsha/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a target='blank' href="https://www.facebook.com/programmer.barsha/"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a target='blank' href="/"><i className="fa-brands fa-github"></i></a></li>
                        <li><a target='blank' href="/"><i className="fa-brands fa-youtube"></i></a></li>
                    </>
                }
            </ul> */}
        </div>
    );
};

export default SocialLinks;