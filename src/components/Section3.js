import React, { useEffect, useRef, useState } from "react";
import { TeamCard } from "./TeamCard";
import alpi from "../assets/teamMember/alpi.png";

export const Section3 = () => {
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const scrollContainerRef = useRef(null);

  const members = [
    {
      name: "Mehmet Alperen Yedik",
      job: "Web & Mobil Developer",
      description:
        "21/06/2002 doğumlu olarak Konya'nın Çumra ilçesinde dünyaya geldim. Hayatım boyunca sporla iç içe oldum ve aynı zamanda el sanatlarıyla ilgilendim. Lise yıllarımda yazılıma olan merakımı keşfettim ve 2023'ten beri web ve mobil yazılım alanında faaliyet gösteriyorum. Kariyer hedefim ise, kurumsal şirketlerde web developer olarak ilerlemek ve yenilikçi projelere imza atmaktır.",
      image: alpi,
      linkedin: "https://www.linkedin.com/in/alperen7k/",
      instagram: "https://www.instagram.com/alperenyedik/",
      github: "https://github.com/Alperen7K",
    },
    {
      name: "Mehmet Alperen Yedik",
      job: "Web & Mobil Developer",
      description:
        "21/06/2002 doğumlu olarak Konya'nın Çumra ilçesinde dünyaya geldim. Hayatım boyunca sporla iç içe oldum ve aynı zamanda el sanatlarıyla ilgilendim. Lise yıllarımda yazılıma olan merakımı keşfettim ve 2023'ten beri web ve mobil yazılım alanında faaliyet gösteriyorum. Kariyer hedefim ise, kurumsal şirketlerde web developer olarak ilerlemek ve yenilikçi projelere imza atmaktır.",
      image: alpi,
      linkedin: "https://www.linkedin.com/in/alperen7k/",
      instagram: "https://www.instagram.com/alperenyedik/",
      github: "https://github.com/Alperen7K",
    },
    {
      name: "Mehmet Alperen Yedik",
      job: "Web & Mobil Developer",
      description:
        "21/06/2002 doğumlu olarak Konya'nın Çumra ilçesinde dünyaya geldim. Hayatım boyunca sporla iç içe oldum ve aynı zamanda el sanatlarıyla ilgilendim. Lise yıllarımda yazılıma olan merakımı keşfettim ve 2023'ten beri web ve mobil yazılım alanında faaliyet gösteriyorum. Kariyer hedefim ise, kurumsal şirketlerde web developer olarak ilerlemek ve yenilikçi projelere imza atmaktır.",
      image: alpi,
      linkedin: "https://www.linkedin.com/in/alperen7k/",
      instagram: "https://www.instagram.com/alperenyedik/",
      github: "https://github.com/Alperen7K",
    },
    {
      name: "Mehmet Alperen Yedik",
      job: "Web & Mobil Developer",
      description:
        "21/06/2002 doğumlu olarak Konya'nın Çumra ilçesinde dünyaya geldim. Hayatım boyunca sporla iç içe oldum ve aynı zamanda el sanatlarıyla ilgilendim. Lise yıllarımda yazılıma olan merakımı keşfettim ve 2023'ten beri web ve mobil yazılım alanında faaliyet gösteriyorum. Kariyer hedefim ise, kurumsal şirketlerde web developer olarak ilerlemek ve yenilikçi projelere imza atmaktır.",
      image: alpi,
      linkedin: "https://www.linkedin.com/in/alperen7k/",
      instagram: "https://www.instagram.com/alperenyedik/",
      github: "https://github.com/Alperen7K",
    },
    {
      name: "Mehmet Alperen Yedik",
      job: "Web & Mobil Developer",
      description:
        "21/06/2002 doğumlu olarak Konya'nın Çumra ilçesinde dünyaya geldim. Hayatım boyunca sporla iç içe oldum ve aynı zamanda el sanatlarıyla ilgilendim. Lise yıllarımda yazılıma olan merakımı keşfettim ve 2023'ten beri web ve mobil yazılım alanında faaliyet gösteriyorum. Kariyer hedefim ise, kurumsal şirketlerde web developer olarak ilerlemek ve yenilikçi projelere imza atmaktır.",
      image: alpi,
      linkedin: "https://www.linkedin.com/in/alperen7k/",
      instagram: "https://www.instagram.com/alperenyedik/",
      github: "https://github.com/Alperen7K",
    },
    {
      name: "Mehmet Alperen Yedik",
      job: "Web & Mobil Developer",
      description:
        "21/06/2002 doğumlu olarak Konya'nın Çumra ilçesinde dünyaya geldim. Hayatım boyunca sporla iç içe oldum ve aynı zamanda el sanatlarıyla ilgilendim. Lise yıllarımda yazılıma olan merakımı keşfettim ve 2023'ten beri web ve mobil yazılım alanında faaliyet gösteriyorum. Kariyer hedefim ise, kurumsal şirketlerde web developer olarak ilerlemek ve yenilikçi projelere imza atmaktır.",
      image: alpi,
      linkedin: "https://www.linkedin.com/in/alperen7k/",
      instagram: "https://www.instagram.com/alperenyedik/",
      github: "https://github.com/Alperen7K",
    },
  ];
  useEffect(() => {
    let animationId;

    // Otomatik kaydırma işlemini gerçekleştiren fonksiyon
    const autoScroll = () => {
      if (scrollContainerRef.current && autoScrollEnabled) {
        // Eğer scroll sona gelmişse başa sar
        if (
          scrollContainerRef.current.scrollLeft +
            scrollContainerRef.current.clientWidth >=
          scrollContainerRef.current.scrollWidth
        ) {
          scrollContainerRef.current.scrollLeft = 0;
        } else {
          // Yatayda 1 birim kaydır
          scrollContainerRef.current.scrollLeft += 1;
        }

        // Daha yumuşak bir animasyon için requestAnimationFrame kullan
        animationId = requestAnimationFrame(autoScroll);
      }
    };

    // Belirli bir süre aralığıyla otomatik kaydırma işlemini başlat
    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [autoScrollEnabled]);

  const handleScrollAreaClick = () => {
    // Otomatik kaydırmayı durdur
    setAutoScrollEnabled(false);

    // Belirli bir süre sonra otomatik kaydırmayı tekrar başlat
    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 10000); // 10 saniye bekleyin, isteğinize göre süreyi ayarlayabilirsiniz
  };

  return (
    <section id="team">
      <div
        onClick={() => handleScrollAreaClick()}
        className="w-full h-full bg-[#7D9AF3] flex flex-col items-center justify-center "
      >
        <div className="w-full h-[120px]" />
        <div
          ref={scrollContainerRef}
          className="w-[100vw] h-[100vh] px-5 py-16 flex flex-row items-center overflow-x-scroll relative"
        >
          {members.map((member) => {
            return (
              <TeamCard
                Class={
                  "mx-4 md:mx-6 md:scale-[1.1] lg:mx-10 lg:scale-[1.2] xl:mx-12 xl:scale-[1.3] 2xl:mx-20 2xl:scale-[1.5]"
                }
                data={member}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
