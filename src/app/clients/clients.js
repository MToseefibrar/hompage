import React from "react";
import Image from "next/image";
import wordpressIcon from "../Assets/Wordpress.png";
import ColumnsImage from "../Assets/columns.png";

const clients = () => {
  return (
    <div>
      <section className="bg-gray-50 pb-16">
        <div className="flex justify-center flex-col items-center max-w-5xl mx-auto">
          <div className="mt-8 font-semibold text-sm text-center">
            <h1>What Our Valuable Cleints Says About Us </h1>
            {/* <div className={style.blueLine}></div> */}
            <p className="font-light text-base pt-3">
              Unlock business success with SmartAdriots. Your partner for
              exceptional software solutions.
            </p>
            <p className="font-light text-base">
              From team augmentation to work outsourcing.
            </p>
          </div>
          <div className="flex mt-10">
            <div className="bg-white  rounded-lg h-80 w-96 mx-auto ml-5x leading-22 ease-in hover:shadow-lg transition duration-300 ease-in-out">
              <Image
                src={ColumnsImage}
                className="mt-8 ml-8"
                height={40}
                width={40}
                alt=""
              />

              <p className="mt-8 ml-8 mr-2 leading-snug p-2">
                Unlock business success with SmartAdriots. Your partner for
                exceptional software solutions. From team augmentation.
              </p>
              <div className="bg-gray-200 h-0.5 w-80 mt-10 ml-8"></div>
              <Image
                src={wordpressIcon}
                className="mt-6 ml-8 rounded-full"
                height={40}
                width={40}
                alt=""
              />
            </div>

            <div className="bg-white rounded-lg h-80 w-96 mx-auto ml-5 leading-22 hover:border-blue-500 transition duration-200 ease-in hover:shadow-lg transition duration-300 ease-in-out">
              <Image
                src={ColumnsImage}
                className="mt-8 ml-8"
                height={40}
                width={40}
                alt=""
              />

              <p className="mt-8 ml-8 mr-2 leading-snug p-2">
                Unlock business success with SmartAdriots. Your partner for
                exceptional software solutions. From team augmentation.
              </p>
              <div className="bg-gray-200 h-0.5 w-80 mt-10 ml-8"></div>
              <Image
                src={wordpressIcon}
                className="mt-6 ml-8 rounded-full"
                height={40}
                width={40}
                alt=""
              />
            </div>

            <div className="bg-white rounded-lg h-80 w-96 mx-auto ml-5 leading-22 hover:shadow-lg transition duration-300 ease-in-out">
              <Image
                src={ColumnsImage}
                className="mt-8 ml-8"
                height={40}
                width={40}
                alt=""
              />
              <p className="mt-8 ml-8 mr-2 leading-snug p-2">
                Unlock business success with SmartAdriots. Your partner for
                exceptional software solutions. From team augmentation.
              </p>
              <div className="bg-gray-200 h-0.5 w-80 mt-10 ml-8"></div>
              <Image
                src={wordpressIcon}
                className="mt-6 ml-8 rounded-full"
                height={40}
                width={40}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default clients;
