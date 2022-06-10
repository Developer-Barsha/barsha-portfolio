import React from 'react';
import Service from './Service';
import './Services.css';

const Services = () => {
    const services =
        [
            {
                id: 1,
                icon: <i className="fa-solid fa-paintbrush"></i>,
                name: "Web Design",
                description: "Web design is the process of planning, conceptualizing, and arranging content online including web/mobile apps and UI design."
            },
            {
                id: 2,
                icon: <i className="fa-solid fa-code"></i>,
                name: "Coding",
                description: "Definition of coding is the process of transforming ideas, solutions, and instructions into the language that the computer can understand."
            },
            {
                id: 3,
                icon: <i className="fa-solid fa-laptop-code"></i>,
                name: "Web Development",
                description: "Web development includes hand coding web pages in a text editor, building a website in a program like Dreamweaver."
            }
        ];

    return (
        <section id='services'>
            <h1 className='uppercase text-center font-bold text-4xl pt-6 pb-3'>My Services</h1>
            <div className='py-5 text-justify grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-12 px-5 gap-5'>
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;