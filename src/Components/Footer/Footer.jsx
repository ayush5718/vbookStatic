import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import logo from "/src/assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <FaInstagram /> },
  ];
  return (
    <>
      <footer className="bg-[#02022a]">
        <div className="container mx-auto  py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  lg:items-center md:items-start  md:gap-[5rem] text-left border-b-2">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-[25vh] py-4 gap-8 sm:gap-[3rem] relative sm:text-left">
              <p className="text-[15px] font-medium text-[white]"></p>
              {/* socials */}
              <div className="flex gap-7 lg:ml-0 sm:ml-[184px] text-[18px] text-[#292267] justify-center md:justify-start lg:opacity-1 opacity-0">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-5xl bg-[#efefef] p-2 rounded-full hover:bg-[#377d99] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>

              <img
                src={logo}
                alt="footer_logo"
                className="lg:w-[18rem]  lg:left-[170px] "
              />
              <p className="text-[16px] font-medium text-[white] lg:block hidden">
                Privacy Policy | © {new Date().getFullYear()} VBook <br />{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/"
                ></a>
              </p>
              <div className="flex gap-7 lg:ml-0 sm:ml-[184px]  mr-12 text-[18px] text-[#292267] justify-center md:justify-start lg:hidden">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-5xl bg-[#efefef] p-2 rounded-full hover:bg-[#377d99] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* middle div */}

            <div className="flex flex-col lg:gap-8 gap-16 relative">
              <p className="text-[22px] font-bold footer-main text-[white]">
                ABOUT US
              </p>

              <span className="top-[38px] absolute w-[7rem] h-[4px] bg-[#3b21e1]"></span>

              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                <NavLink to="#">Home</NavLink>
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                <NavLink to="/about">About Us</NavLink>
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                <NavLink to="/contact">Contact Us</NavLink>
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                <NavLink to="/registeration">Student Pre-Registration</NavLink>
              </p>
              {/* <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                Full-body Strength
              </p> */}
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative lg:mt-0 sm:mt-[15px]">
              <p className="text-[22px] font-bold footer-main text-[white] lg:mt-0 mt-8">
                USEFUL LINKS
              </p>

              <span className="lg:top-[35px] top-[47px] absolute w-[7rem] h-[4px] bg-[#3b21e1]"></span>

              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                <NavLink to="/ourteams">Teams </NavLink>
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                <NavLink to="/teacher">Become A Tutor</NavLink>
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                <NavLink to="/contact">Contact</NavLink>
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                FAQ
              </p>
              {/* <p className="text-[16px] text-[white] font-bold ">
                Sunday - Closed
              </p> */}
            </div>
            <p className="text-[16px] font-medium text-[white] lg:hidden mt-6">
              Privacy Policy | © {new Date().getFullYear()} VBook <br />{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.radiustheme.com/"
              ></a>
            </p>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
