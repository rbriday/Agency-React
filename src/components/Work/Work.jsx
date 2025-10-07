import React from 'react';
import Container from '../Layout/Container';

const Work = () => {
    return (
        <div className='bg-[#F3F3F3] py-[145px]'>
            <Container>
                <div className='w-[620px] m-auto text-center'>
                    <h3 className='font-inter font-bold text-[45px] text-primary pb-[24px]'>Our Recent Work</h3>
                    <p className='font-inter text-[16px] text-pera'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>
                <div className='flex'>
                    <div className='w-[424px]'>ajsdfkj</div>
                    <div className='w-[424px]'>ajsdfkj</div>
                    <div className='w-[424px]'>ajsdfkj</div>
                    <div className='w-[424px]'>ajsdfkj</div>
                    <div className='w-[424px]'>ajsdfkj</div>
                </div>
            </Container>
        </div>
    );
};

export default Work;