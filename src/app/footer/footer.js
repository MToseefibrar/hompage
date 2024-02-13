import React from "react";
import Image from "next/image";
import wordpressIcon from "../Assets/Wordpress.png";

const footer = () => {
  return (
    <div>
      <section className="bg-white h-96">
        <div className="flex justify-around max-w-5xl mx-auto">
          <div className="flex mt-10">
            <div className="bg-white rounded-lg h-80 w-96 mx-auto  ml-5 leading-22 ease-in">
              <h4 className="font-bold text-xl">SmartAdriots</h4>
              <p className="mt-1 mr-2 leading-snug mt-4 ">
                Unlock business success with SmartAdriots. Your partner for
                exceptional software solutions. From team augmentation.
              </p>
              <h4 className="font-bold text-xl mt-4">Brand By</h4>
              <span className="font-bold text-xl">
                SmartAdriots Technologies (PVT) LTD.
              </span>
            </div>

            <div className="bg-white rounded-lg h-80 w-96 mx-auto  ml-5 leading-22 hover:border-blue-500 transition duration-200 ease-in">
              <h4 className="font-bold text-xl"> Services</h4>
              <div className="flex flex-col mt-3 leading-6">
                <span>Web Development</span>
                <span>Mobile App Development</span>
                <span>Woordpress Development</span>
                <span>Quality Assurance </span>
                <span>Consultancy </span>
              </div>
            </div>

            <div className="bg-white rounded-lg h-80 w-96 mx-auto  ml-5 leading-22">
              <h4 className="font-bold text-xl">Address</h4>
              <p className="mt-3 mb-3 mr-2 leading-snug">
                Street # 5 Link Road Mian Branch, 19551 Pakistan Faisalabad
              </p>
              <span className="pt-3">
                <b> Phone:</b> 123 456 789
              </span>
              &nbsp; &nbsp;
              <span className="mt-3">
                <b> Mail:</b> 123 456 789
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default footer;
