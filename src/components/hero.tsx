"use client";
import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Carousel from "./carousel/Carousel";
import Image from "next/image";

function Hero() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    // Update the state when the pathname changes
    setCurrentPath(pathname);
  }, [pathname]);

  const t = useTranslations("Hero");

  const GetBackgroundClass = () => {
    if (currentPath == "/service" || currentPath == "/industry" || currentPath == "/supplier" || currentPath == "/contact") {
      return ;
    } else {
      return ((
        <div className="relative w-full mt-16 sm:mt-0">
          <Image className="w-full" src="/images/Frame47.png" alt="" width={34} height={2} sizes="(max-width: 600px) 100vw, 50vw"  priority={true}/>
          <div className="flex w-full justify-center">
            <div className={` ${currentPath == "/supplier" ? "hidden" : "block"} font-bold text-white absolute bottom-2 sm:bottom-7 text-sm sm:text-3xl bg-black bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-md`}>
              {t("slogan")}
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <section
      id="home"
      className={`${currentPath == "/supplier" ? "shadow-md pb-0" : "pb-16 "} `}
    >
      <GetBackgroundClass />
      {
        currentPath == "/supplier" &&
        <div className="mt-10">
          <Carousel />
        </div>
      }
      
    </section>
  );
}

export default Hero;



