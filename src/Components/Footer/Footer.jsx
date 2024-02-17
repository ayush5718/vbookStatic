import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { BiLogoPinterestAlt } from "react-icons/bi";
import logo from "/src/assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  const iconsTab = [
    {
      icon: (
        <a href="https://www.linkedin.com/company/v-books/" target="_blank">
          <FaLinkedin />
        </a>
      ),
    },
    {
      icon: (
        <a
          href="https://whatsapp.com/channel/0029VaP99aI9mrGevvFAxh0T"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
      ),
    },
    {
      icon: (
        <a
          href="https://youtube.com/@v_books?si=dXV3UjkhRFt65u8h"
          target="_blank"
        >
          <FaYoutube />
        </a>
      ),
    },
    {
      icon: (
        <a href="https://www.instagram.com/v_book_offical/" target="_blank">
          <FaInstagram />
        </a>
      ),
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };
  return (
    <>
      <footer className="bg-[#02022a] md:h-[46vh]">
        <div className="container mx-auto">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  lg:items-center md:items-start  md:gap-[5rem] text-left md:py-[30px] pt-[96px]">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-[25vh] py-4 gap-8 sm:gap-[3rem] relative sm:text-left">
              <p className="text-[15px] font-medium text-[white]"></p>
              <img
                src={logo}
                alt="footer_logo"
                className="md:w-[27rem]  md:left-[133px] md:absolute md:top-[-72px] absolute top-[-72px]"
              />
              {/* socials */}
              <div className="flex gap-7 lg:ml-0 sm:ml-[184px] text-[18px] text-[#292267] justify-center md:justify-start hidden">
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

              <div className="flex gap-7 lg:ml-0 sm:ml-[184px]  mr-12 text-[18px] text-[#292267] justify-center md:justify-start md:opacity-1">
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

            <div className="flex flex-col md:gap-8 gap-10 relative md:text-4xl">
              <p className="md:text-[30px] text-[20px] font-bold footer-main text-[white]">
                ABOUT US
              </p>

              <span className="top-[38px] absolute w-[7rem] h-[4px] bg-[#3b21e1]"></span>

              <p className="md:text-[22px] text-[15px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                <NavLink to="#" onClick={scrollToTop}>
                  Home
                </NavLink>
              </p>
              <p className="md:text-[22px] text-[15px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                <NavLink to="/about" onClick={scrollToTop}>
                  About Us
                </NavLink>
              </p>
              <p className="md:text-[22px] text-[15px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                <NavLink to="/contact" onClick={scrollToTop}>
                  Contact Us
                </NavLink>
              </p>
              <p className="md:text-[22px] text-[15px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                <NavLink to="/ourteams" onClick={scrollToTop}>
                  Our Team
                </NavLink>
              </p>
              {/* <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-[#377d99] cursor-pointer text-[white] font-medium hover:font-bold">
                Full-body Strength
              </p> */}
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative lg:mt-0 sm:mt-[15px] md:text-4xl">
              <p className="md:text-[30px] text-[20px] font-bold footer-main text-[white] lg:mt-0 mt-8">
                USEFUL LINKS
              </p>

              <span className="md:top-[35px] top-[58px] absolute w-[7rem] h-[4px] bg-[#3b21e1]"></span>

              <p className="md:text-[22px] text-[15px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                <NavLink to="/registeration" onClick={scrollToTop}>
                  Student Pre Registration{" "}
                </NavLink>
              </p>
              <p className="md:text-[22px] text-[15px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                <NavLink to="/teacher" onClick={scrollToTop}>
                  Become A Tutor
                </NavLink>
              </p>
              <p className="md:text-[22px] text-[15px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
                <NavLink to="" onClick={scrollToTop}>
                  Feedback
                </NavLink>
              </p>
              <p className="md:text-[22px] text-[15px] hover:text-[#377d99] cursor-pointer text-[white] font-medium">
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
        <div className="border-t-2"></div>
        <p className="text-[20px] font-medium text-[white] lg:block hidden md:mt-8 md:ml-20">
          Privacy Policy | © {new Date().getFullYear()} VBook <br />{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.radiustheme.com/"
          ></a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
