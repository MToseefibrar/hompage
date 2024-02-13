"use client";
import styles from "./styles.module.css";
import Header from "./header/page";
import Image from "next/image";
import mainImage from "../../src/app/Assets/img1.png";
import Imageone from "../../src/app/Assets/pic1.png";
import Imagetwo from "../../src/app/Assets/pic2.png";
import Imagethree from "../../src/app/Assets/pic3.png";
import Imagefour from "../../src/app/Assets/pic4.png";
import Imagefive from "../../src/app/Assets/pic5.png";
import zeroImage from "../../src/app/Assets/zero.png";
import imageTwoOriginal from "../../src/app/Assets/twoorg.png";
import About from "./about/page";
import Services from "./services/page";
import Ourfeatures from "./OurFeatures/ourfeatures";
import Technologies from "./technologies/technologies";
import Solution from "./solutions/solution";
import Process from "./process/process";
import Clients from "./clients/clients";
import Footer from "./footer/footer";

import { useState } from "react";

export default function Home() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <main className={styles.main}>
      <Header />

      {/* ...SECTION TWO... */}

      <section className="bg-gray-50">
        <div className="bg-gray-50 h-550 max-w-85 mx-auto">
          <div className="flex items-center justify-around">
            <div className="mt-4">
              <h1 className="text-6xl leading-tight h-17 overflow-hidden font-bold ml-10">
                Modern & Digital
              </h1>
              <h1 className="text-6xl leading-tight h-16 overflow-hidden font-bold ml-10">
                <span className="text-blue-500"> IT Solution </span>
                For Your
              </h1>
              <h1 className="text-6xl leading-tight h-17 overflow-hidden font-bold ml-10">
                Tech Business
              </h1>

              <div className="w-200 h-15 border-3 border-solid border-blue-600 border- border-t border-r border-b rounded-3xl ml-10 mt-3"></div>

              <div>
                <p className="line-clamp-2 h-6 overflow-hidden mt-6 ml-10">
                  Unlock business success with 
                </p>
                <p className="line-clamp-2 h-6 overflow-hidden mt-1 ml-10">
                  <b> SmartAdriots.</b> Your partner for exceptional
                </p>
                <p className="line-clamp-2 h-6 overflow-hidden mt-1 ml-10">
                  software solutions.
                </p>

                <button className="w-36 h-10 bg-blue-950 rounded-full font-semibold text-white hover:border-2 border-blue-500 hover:bg-transparent hover:text-black transition duration-200 mt-5 ml-10">
                  Get Started
                </button>
              </div>
            </div>

            <div className="mt-12">
              <Image
                className="mb-10 mr-7"
                src={mainImage}
                height={550}
                width={550}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ...SECTION ONE END... */}

      {/* ...SECTION TWO... */}

      <section className="bg-blue-500">
        <div className=" flex bg-blue-500 h-20 justify-center items-center mx-auto">
          <div
            className="flex justify-between items-center gap-28"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={isHover ? zeroImage : Imageone}
              className={styles.logo}
              height={100}
              width={160}
            />
            <Image
              src={isHover ? imageTwoOriginal : Imagetwo}
              className={styles.logo}
            />
            <Image
              src={Imagethree}
              className={styles.logo}
              height={40}
              width={150}
            />
            <Image src={Imagefour} className={styles.logo} />
            <Image src={Imagefive} className={styles.logo} />
          </div>
        </div>
      </section>

      {/* ...SECTION TWO END... */}

      {/* ...ABOUT SECTION THREE... */}

      <About />

      {/* ...SERVICES SECTION FOUR... */}

      <Services />

      {/* ...FEATURE SECTION FIVE... */}

      <Ourfeatures />
      {/* ...FEATURE SECTION FIVE... */}

      <Technologies />
      {/* ...FEATURE SECTION FIVE... */}
      <Solution />
      {/* ...FEATURE SECTION FIVE... */}
      <Process />
      {/* ...FEATURE SECTION FIVE... */}
      <Clients />

      <Footer />
    </main>
  );
}
