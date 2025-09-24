import React from 'react';
import Container from '../Layout/Container';

const Banner = () => {
    return (
        <div className="relative bg-[url(./assets/bannar.png)] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 z-[1] after:z-[-1]">
           <Container>
             <div className='pt-[315px] text-center'>
                <h1 className='w-[950px] m-auto font-inter font-bold text-[75px] leading-[120%] text-[#fff]'>We Help brands with high quality services</h1>
                <p className='w-[621px] font-inter text-[16px] leading-[26px] text-[#fff] m-auto pt-[50px] pb-[40px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                <button type="button" className="py-[15px] px-[40px] font-inter font-semibold text-[20px] text-[#fff] bg-secondary rounded-[15px] cursor-pointer mb-[175px]">Get Started</button>
            </div>
           </Container>
        </div>
    );
};

export default Banner;