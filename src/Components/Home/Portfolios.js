import React from 'react';
import Portfolio from './Portfolio';
import demoPortfolio from './../../images/1.png';
import fruitsCorner from './../../images/2.png';
import redOnion from './../../images/3.png';
import clock from './../../images/4.png';
import darkPractice from './../../images/5.png';
import hotel from './../../images/6.png';
import grocery from './../../images/7.png';
import food from './../../images/8.png';
import penguinFashion from './../../images/9.png';

const Portfolios = () => {
    const portfolios =
        [
            {
                id: 1,
                image: demoPortfolio,
                name: 'Demo Portfolio',
                tools: 'HTML, CSS, Javascript',
                code: 'https://github.com/Developer-Barsha/demo-portfolio',
                link: 'https://developer-barsha.netlify.app/'
            },
            {
                id: 2,
                image: redOnion,
                name: 'Red Onion',
                tools: 'React, CSS, React Router, Bootstrap',
                code: 'https://github.com/Developer-Barsha/red-onion-restaurant',
                link: 'https://red-onion-resturant.netlify.app/'
            },
            {
                id: 12,
                image: darkPractice,
                name: 'Dark Mode',
                tools: 'HTML, CSS, Javascript',
                code: 'https://github.com/Developer-Barsha/dark-practice',
                link: 'https://red-onion-resturant.netlify.app/'
            },
            {
                id: 6,
                image: grocery,
                name: 'Grocery Store',
                tools: 'HTML, CSS, Javascript, Tailwind',
                code: 'https://github.com/Developer-Barsha/grocery-practice',
                link: 'https://practice-grocery-store.netlify.app/'
            },
            {
                id: 5,
                image: hotel,
                name: 'Bluewaves Hotel',
                tools: 'HTML, CSS, Bootstrap',
                code: 'https://bluewaves-plaza-hotel.netlify.app/',
                link: 'https://red-onion-resturant.netlify.app/'
            },
            {
                id: 9,
                image: food,
                name: 'Food Restaurant',
                tools: 'HTML, CSS, Bootstrap',
                code: 'https://bluewaves-plaza-hotel.netlify.app/',
                link: 'https://red-onion-resturant.netlify.app/'
            },
            {
                id: 10,
                image: penguinFashion,
                name: 'Penguin Fashion',
                tools: 'HTML, CSS, Bootstrap',
                code: 'https://github.com/Developer-Barsha/penguin-fashion',
                link: 'https://developer-barsha.github.io/penguin-fashion/'
            },
            {
                id: 3,
                image: clock,
                name: 'Digital Clock',
                tools: 'HTML, CSS, JavaScript',
                code: 'https://github.com/Developer-Barsha/digital-clock',
                link: 'https://red-onion-resturant.netlify.app/'
            },
            {
                id: 4,
                image: fruitsCorner,
                name: 'Fruits Corner',
                tools: 'React, CSS, React Router, Tailwind, JWT',
                server: 'https://github.com/Developer-Barsha/fruits-corner-server',
                client: 'https://github.com/Developer-Barsha/fruits-corner-client',
                link: 'https://fruits-corner.netlify.app/'
            },
        ];

    return (
        <section id='portfolio'>
            <h1 className='uppercase text-center font-bold text-4xl pt-6 pb-3'>Portfolios</h1>
            <div className='py-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-12 px-5 gap-5'>
                {
                    portfolios?.map(portfolio => <Portfolio key={portfolio.id} portfolio={portfolio}></Portfolio>)
                }
            </div>
        </section>
    );
};

export default Portfolios;