import React, { useState } from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

export const TeamCard = ({ data, Class }) => {
  const [isHovered, setIsHovered] = useState(false);

  let iconClass =
    "text-[40px] text-white/80 hover:text-white hover:scale-[1.1]";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`z-10 card-bg bg-center w-[250px] h-[350px] rounded-[25px] shadow-2xl border-2 border-solid border-white/50 ${Class}`}
    >
      {/* Ana Bölüm */}
      <div
        onClick={() => setIsHovered(true)}
        className={` ${isHovered ? "hidden" : "block"}`}
      >
        <div className="w-[250px] h-[350px]">
          <img
            className="w-[246px] p-2 rounded-[25px] "
            src={data.image}
            alt={data.name}
          />
          <div className="px-4 py-3 ">
            <p className="text-base text-[20px] pb-1 text-white font-bold">
              {data.name}
            </p>
            <p className="text-white/70 text-base">{data.job}</p>
          </div>
        </div>
      </div>
      {/* Detay Bölümü */}
      <div
        onClick={() => setIsHovered(false)}
        className={` ${isHovered ? "block" : "hidden"} `}
      >
        <div className="w-[250px] h-[350px]  p-2 flex flex-col items-center justify-between">
          <label className="text-[13px] text-center p-2 text-white">
            {data.description}
          </label>
          <div className="w-full py-2 flex items-center justify-evenly">
            <a href={data.instagram} target="_blank">
              <InstagramOutlined className={iconClass} />
            </a>
            <a href={data.github} target="_blank">
              <GithubOutlined className={iconClass} />
            </a>
            <a href={data.linkedin} target="_blank">
              <LinkedinOutlined className={iconClass} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
