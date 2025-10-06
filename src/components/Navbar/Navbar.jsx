import Container from "../Layout/Container";
import logo from '../../assets/logo.png'


const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 w-full z-[99]">
        <Container className="">
               <div className="md:flex justify-between items-center py-[50px]">
                    <div>
                        <img src= {logo} alt="" />
                    </div>
                    <div>
                        <ul className="md:flex items-center space-x-[50px] font-inter font-bold text-[18px] leading-[26px] text-[#fff]">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <button type="button" className="py-[15px] px-[40px] font-inter font-semibold text-[20px] text-[#fff] bg-secondary rounded-[15px] cursor-pointer">Contact</button>
                    </div>
                </div>
        </Container>
        </div>
    );
};

export default Navbar;