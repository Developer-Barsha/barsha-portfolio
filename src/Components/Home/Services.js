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
                description: "Web design is the process of planning, conceptualizing, and arranging content online including the website's overall functionality. Web design also includes web apps, mobile apps, and user interface design."
            },
            {
                id: 2,
                icon: <i className="fa-solid fa-code"></i>,
                name: "Coding",
                description: "The definition of coding is the process of creating instructions for computers using programming languages. Computer code is used to program the websites, apps, and other technologies we interact with every day."
            },
            {
                id: 3,
                icon: <i className="fa-solid fa-laptop-code"></i>,
                name: "Web Development",
                description: "Web developers create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle."
            }
        ];

    return (
        <section id='services'>
            <h1 className='uppercase text-center font-bold text-4xl pt-6 pb-3'>My Services</h1>
            <div className='py-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-12 px-5 gap-5'>
                {
                    services?.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;