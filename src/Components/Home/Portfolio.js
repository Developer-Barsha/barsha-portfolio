import React from 'react';

const Portfolio = ({ portfolio }) => {
    return (
        <div className='portfolio bg-white flex relative flex-col gap-3 shadow-xl justify-center px-5 rounded-lg border'>
            <img className='rounded-lg mt-2 delay-200 hover:scale-105' src={portfolio.image} alt="" />
            <h1 className="text-2xl font-bold text-primary">{portfolio?.name}
                <div className="badge badge-secondary ml-3"><a href={portfolio?.link} target='blank'>Live Site</a></div>
                </h1>
            <p>{portfolio?.tools}</p>
            <button className='text-left text-2xl text-white'><i className="fa-solid fa-angles-right"></i></button>

            <div className='relative'>
            <div className='flex justify-end gap-2 absolute bottom-5 right-1'>
                <div className="badge badge-outline"><a href={portfolio?.code || portfolio?.client} target='blank'>Code</a></div>
                {portfolio?.server && <div className="badge badge-outline"><a href={portfolio?.server} target='blank'>Server</a></div>}
            </div>
            </div>
        </div>
    );
};

export default Portfolio;