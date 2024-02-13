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
              <div className="flex gap-7 lg:ml-0 sm:ml-[184px] text-[18px] text-[#292267] justify-center md:justify-start">
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
                className="w-[18rem] left-[170px] "
              />
              <p className="text-[16px] font-medium text-[white]">
                Privacy Policy | © {new Date().getFullYear()} VBook <br />{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/"
                ></a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main text-[white]">
                ABOUT US
              </p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#3b21e1]"></span>

              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                Home
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                About Us
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                Contact Us
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                Become a Tutor
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
              <p className="text-[22px] font-bold footer-main text-[white]">
                USEFUL LINKS
              </p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#3b21e1]"></span>

              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                Teams
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                Become A Tutor
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                Contact
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                FAQ
              </p>
              {/* <p className="text-[16px] text-[white] font-bold ">
                Sunday - Closed
              </p> */}
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
