import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const PortfolioDetail = () => {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Developer-Barsha/barsha-portfolio-project.json/main/portfolios.json')
            .then(res => res.json())
            .then(data => {
                const project = data.find(p => p.id == id);
                console.log(project)
                return setPortfolio(project);
            })
    }, [id])

    return (
        <section className='pt-24 lg:px-16 px-5 py-10'>
            <h1 className='font-bold text-warning text-3xl pb-3'>Detail About: <span className='text-info'>{portfolio?.name}</span></h1>
            <div className='flex items-center gap-8 lg:flex-row flex-col w-full'>
                <div className='w-full lg:w-1/2 flex flex-col gap-3'>
                    <img className='rounded-lg w-full border' src={portfolio?.image} alt="" />
                    <h1 className="text-2xl font-bold text-primary">{portfolio?.name} </h1>
                    <h1 className="font-bold text-secondary">{portfolio?.tools} </h1>
                    <h1>{portfolio?.description} </h1>
                </div>
                <div className='flex flex-col gap-3 w-full lg:w-1/2'>
                    <div className='h-96 w-full rounded-lg overflow-y-auto hover:scroll-m-10'>
                        <img className='rounded-lg w-full border' src={portfolio?.full} alt="" />
                    </div>
                    <h1 className="text-secondary">Scroll down to see full site!</h1>
                    <div className='flex gap-3' style={{ transition: '0.5s' }}>
                        <div className="badge badge-secondary w-10 h-10"><a href={portfolio?.link} target='blank' title='Livelink'><i className="fa-solid fa-link"></i></a></div>

                        <div className="badge badge-info w-10 h-10"><a href={portfolio?.code || portfolio?.client} target='blank' title='Client/Code'><i className="fa-solid fa-code"></i></a></div>

                        {portfolio?.server && <div className="badge badge-outline w-10 h-10"><a href={portfolio?.server} target='blank' title='Server'><i className="fa-solid fa-server"></i></a></div>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetail;