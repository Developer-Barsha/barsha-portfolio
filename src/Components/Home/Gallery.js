import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <section id='gallery'>
            <h1 className="text-4xl text-center font-bold mt-12 mb-6">Photo Gallery</h1>

            <div className='flex galleries justify-center gap-3 px-5'>
                <div className='flex flex-col gap-3 galleries-part'>
                    <div className='long-img flex justify-center gap-3'>
                        <img data-aos="zoom-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                        <img data-aos="zoom-out" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlEA6Vsz0fqBzwPvPnhncrBwAXizgKMXqSNQmLLctUOtagnhT9U2b9zWAAvFBo4jfAYA&usqp=CAU" alt="" />
                    </div>
                    <div data-aos="zoom-in-up" className='short-img flex justify-center'>
                        <img src="https://tailwindcss.com/_next/static/media/social-card-large.f6878fd8df804f73ba3f1a271122105a.jpg" alt="" />
                    </div>
                </div>

                <div className='flex flex-col gap-3 galleries-part'>
                    <div data-aos="zoom-in-down" className='short-img flex justify-center'>
                        <img src="https://i.morioh.com/6041892b0c.png" alt="" />
                    </div>

                    <div className='long-img flex justify-center gap-3'>
                        <img data-aos="zoom-in-left" src="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" alt="" />

                        <img data-aos="fade-up" data-aos-duration="2500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZxVauwvK9ORMtJaQf1oRvmaZhAHhx3feXyaleyiYd3Q3BnFrtqAvkN9K2F069mfwEFQ&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;