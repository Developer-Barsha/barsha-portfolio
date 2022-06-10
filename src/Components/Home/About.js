import React from 'react';
import './About.css'

const About = () => {
    return (
        <section id='about' className='py-5 lg:px-12 px-6 items-center mx-auto'>
            <div className='flex lg:flex-row flex-col gap-10 items-center'>
                <div className='lg:w-1/2 w-full'>
                    <img data-aos="fade" src="https://media.istockphoto.com/vectors/young-programmer-pointing-on-the-laptop-screen-programming-code-flat-vector-id943084854?k=20&m=943084854&s=612x612&w=0&h=uEaf1DCv71aEd9be9dfTZonurO2verE7GBOaXi9fri0=" className='w-full' alt="" />
                </div>
                <div className='grid grid-cols-1 gap-4 lg:w-1/2 w-full'>
                    <p className='font-bold text-primary'>VISIT MY PORTFOLIO & HIRE ME</p>
                    <h2 className="text-5xl font-bold text-secondary">About Me...</h2>
                    <p>A motivated junior front-end developer with curiosity of learning and exploring new languages and development tools, besides looking for a position in a growth-oriented company where I can use my skills to the advantage of the company while developing my own skills.</p>
                    <a href="Barsha-Resume.pdf" download="Barsha-Resume.pdf" className="mt-3 button-link bg-secondary my-btn uppercase text-white font-bold text-center">Download CV</a>
                </div>
            </div>
        </section>
    );
};

export default About;