import React from 'react';
import Container from '../Layout/Container';

const Success = () => {
    return (
        <div className='py-[150px]'>
            <Container>
                    <div className='flex justify-between bg-[#E0FFF9] pt-[70px] pb-[85px] px-[50px]'>
                        <div className='w-[387px]'>
                            <h4 className='font-inter font-medium text-secondary text-[25px] leading-[120%] pb-[15px]'>Our Success</h4>
                            <h3 className='font-inter font-semibold text-primary text-[35px]'>West cost Brand makers-Global Edge</h3>
                        </div>
                        <div className='flex justify-between w-[722px]'>
                            <div>
                                <h3 className='font-inter font-bold text-[50px] text-primary'>200+</h3>
                                <p className='font-inter font-medium text-[20px] text-pera pt-[20px]'>Customer Satisfied</p>
                            </div>
                            <div>
                                <h3 className='font-inter font-bold text-[50px] text-primary'>4.5</h3>
                                <p className='font-inter font-medium text-[20px] text-pera pt-[20px]'>200+ Avg rating</p>
                            </div>
                            <div>
                                <h3 className='font-inter font-bold text-[50px] text-primary'>351+</h3>
                                <p className='font-inter font-medium text-[20px] text-pera pt-[20px]'>Project Delivered</p>
                            </div>
                        </div>
                    </div>
            </Container>
        </div>
    );
};

export default Success;