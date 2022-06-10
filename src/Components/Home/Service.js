import React from 'react';
import './Services.css';

const Service = ({service}) => {
    return (
        <div className='text-black service bg-white flex flex-col gap-3 shadow-xl h-80 justify-center px-5 hover:text-white rounded-lg border'>
            <p className='text-5xl service-icon'>{service?.icon}</p>
            <h1 className="text-2xl font-bold">{service?.name}</h1>
            <p>{service?.description}</p>
        </div>
    );
};

export default Service;