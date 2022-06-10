import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Intro.css';

const Intro = () => {
    return (
        <section id='intro' className='pt-24 flex py-5 flex-col lg:px-12 px-6 lg:flex-row-reverse items-center mx-auto'>
            <div className='w-full lg:w-1/2'>
                <img className='w-full mx-auto' src="https://i.ibb.co/KyCMDds/girl-working.gif" alt="" />
                {/* <img className='w-4/5 mx-auto' src="https://pngimg.com/uploads/computer_pc/computer_pc_PNG7719.png" alt="" /> */}
            </div>
            <div className='w-full lg:w-1/2'>
                <h1 className='text-xl font-bold'>WELCOME TO MY WORLD!</h1>
                {/* <!-- text animation --> */}
                <div className="wrapper pt-5 pb-3">
                    <div className="static-text pt-1">I'm a</div>
                    <div className="dynamic-texts text-primary">
                        <li><span>React Developer</span></li>
                        <li><span>Web Developer</span></li>
                        <li><span>Front End Developer</span></li>
                    </div>
                </div>
                <SocialLinks/>
                <p className='text-justify'>Hello there! I am a front-end web developer. As a passionate developer, I love to learn & explore new features of websites. I am a fast learner and a hard-working person who has been doing development for over a year. My goal is to become an awesome web developer.</p>
                
                <button className="mt-5 mr-3 button-link my-btn uppercase text-primary font-bold text-center">Download CV</button>
                <button className="mt-5 button-link my-btn uppercase text-primary font-bold text-center">Download CV</button>
            </div>
        </section>
    );
};

export default Intro;