import linker from "../assets/whiteLogo.svg";
import ozteknik from "../assets/ozteknik.svg";
import kapsul from "../assets/kapsul.svg";
import Mail from "../assets/icons/mail.png";
import Phone from "../assets/icons/phone.png";
import { LinkedinOutlined, InstagramOutlined } from "@ant-design/icons";
export const Footer = () => {
  const iconClass =
    "text-white text-[25px] md:text-[33px] lg:text-[40px] m-1 hover:scale-[1.05]";
  return (
    <section id="partnership">
      <div className="w-full h-[100vh] bg-[#5BE0E6] flex flex-col items-center justify-between">
        <div className="w-full h-[100px]" />
        <div className="w-full flex flex-col items-center justify-evenly sm:justify-around">
          <h1 className="text-white font-bold text-[23px] sm:text-[30px] lg:text-[40px] mb-12 sm:mb-20">
            PAYDAŞLAR
          </h1>
          <div className="w-full flex justify-evenly  items-center ">
            <a href="https://kapsulteknoloji.org/" target="_blank">
              <img
                className="w-[70px] sm:w-[120px] lg:w-[160px] m-2 hover:scale-[1.05]"
                src={kapsul}
              />
            </a>
            <a href="https://ozteknikrekor.com.tr/en/homepage/" target="_blank">
              <img
                className="w-[180px] sm:w-[250px] lg:w-[310px] m-2 hover:scale-[1.05]"
                src={ozteknik}
              />
            </a>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#8C53FE] to-[#7D9AF3] border-solid border-white/80 border-t-2">
          <div className="w-full section-1-bg bg-center flex flex-col items-center justify-center  ">
            <div className="w-[90vw] h-full flex flex-col sm:flex-row items-center justify-between py-4">
              <div className="">
                <img
                  className="lg:w-[150px] md:w-[120px] w-[90px] m-2 md:m-3 lg:m-5 hover:scale-[1.05]"
                  src={linker}
                />
                <div className="flex items-center justify-center">
                  <a
                    href="https://www.instagram.com/linkercompany/"
                    target="_blank"
                  >
                    <InstagramOutlined className={iconClass} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/linker-companyy/about/"
                    target="_blank"
                  >
                    <LinkedinOutlined className={iconClass} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start mt-2">
                <a href="tel:+903322053981">
                  <div className="flex items-center justify-center">
                    <img className="w-[25px] md:w-[33px] m-2" src={Phone} />
                    <label className="text-white text-[15px] md:text-[16px]">
                      +90 (545) 123 12 12
                    </label>
                  </div>
                </a>
                <a href="mailto:linkerworkspace@gmail.com" target="_blank">
                  <div className="flex items-center justify-center">
                    <img className="w-[25px] md:w-[33px] m-2" src={Mail} />
                    <label className="text-white text-[15px] md:text-[16px]">
                      linkerworkspace@gmail.com
                    </label>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full border-t-2 border-white/80 border-solid flex items-center justify-center">
              <label className="text-white my-4">
                Linker Company All Rights Reserved ©
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
