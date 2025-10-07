import React from "react";
import Container from "../Layout/Container";
import serviceOne from '../../assets/serviceOne.png'
import servicetwo from '../../assets/servicetwo.png'
import serviceThree from '../../assets/serviceThree.png'
import serviceFour from '../../assets/serviceFour.png'
import serviceFive from '../../assets/serviceFive.png'

const Service = () => {
  return (
    <div className="pb-[100px]">
      <Container>
        <div className="w-[609px] text-center m-auto pb-[30px]">
          <h2 className="font-inter font-bold text-[45px] text-primary">
            Our Provided Services
          </h2>
          <p className="font-inter text-[16px] text-pera">
            There are many variations of passages of Lorem Ipsum available, but
            themajority have suffered alteration in some form.
          </p>
        </div>
        <div className="flex justify-between">
            <div className="w-[424px] px-[49px] text-center pt-[80px] pb-[47px] hover:shadow-[0px_0px_11px_6px_rgba(0,_0,_0,_0.1)] transition-all rounded-[20px] mt-[20px]">
                <img src= {serviceOne} alt="#service" className="m-auto" />
                <h3 className="font-inter font-bold text-[25px] pt-[40px] pb-[20px]">Web Design</h3>
                <p className="font-inter text-[16px] text-pera">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
            </div>
            <div className="w-[424px] px-[49px] text-center pt-[80px] pb-[47px] hover:shadow-[0px_0px_11px_6px_rgba(0,_0,_0,_0.1)] transition-all rounded-[20px] mt-[20px]">
                <img src= {servicetwo} alt="#service" className="m-auto" />
                <h3 className="font-inter font-bold text-[25px] pt-[40px] pb-[20px]">UI/UX Design</h3>
                <p className="font-inter text-[16px] text-pera">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
            </div>
            <div className="w-[424px] px-[49px] text-center pt-[80px] pb-[47px] hover:shadow-[0px_0px_11px_6px_rgba(0,_0,_0,_0.1)] transition-all rounded-[20px] mt-[20px]">
                <img src= {serviceThree} alt="#service" className="m-auto" />
                <h3 className="font-inter font-bold text-[25px] pt-[40px] pb-[20px]">Web Development</h3>
                <p className="font-inter text-[16px] text-pera">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
            </div>
        </div>


        <div className="flex justify-between">
            <div className="w-[424px] px-[49px] text-center pt-[80px] pb-[47px] hover:shadow-[0px_0px_11px_6px_rgba(0,_0,_0,_0.1)] transition-all rounded-[20px] mt-[20px]">
                <img src= {serviceFour} alt="#service" className="m-auto" />
                <h3 className="font-inter font-bold text-[25px] pt-[40px] pb-[20px]">Web Design</h3>
                <p className="font-inter text-[16px] text-pera">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
            </div>
            <div className="w-[424px] px-[49px] text-center pt-[80px] pb-[47px] hover:shadow-[0px_0px_11px_6px_rgba(0,_0,_0,_0.1)] transition-all rounded-[20px] mt-[20px]">
                <img src= {serviceFive} alt="#service" className="m-auto" />
                <h3 className="font-inter font-bold text-[25px] pt-[40px] pb-[20px]">UI/UX Design</h3>
                <p className="font-inter text-[16px] text-pera">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
            </div>
            <div className="w-[424px] px-[49px] text-center pt-[80px] pb-[47px] hover:shadow-[0px_0px_11px_6px_rgba(0,_0,_0,_0.1)] transition-all rounded-[20px] mt-[20px]">
                <img src= {serviceThree} alt="#service" className="m-auto" />
                <h3 className="font-inter font-bold text-[25px] pt-[40px] pb-[20px]">Web Development</h3>
                <p className="font-inter text-[16px] text-pera">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
