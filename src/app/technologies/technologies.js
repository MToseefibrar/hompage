import React from "react";
import style from "../../app/technologies/style.module.css";
import Image from "next/image";
import wordpressIcon from "../Assets/Wordpress.png";
import ReactImage from "../Assets/react.png";
import NodeImage from "../Assets/nodejs.png";

function technologies() {
  return (
    <div>
      <section className="bg-white h-80">
        <div className="flex justify-center flex-col items-center max-w-5xl mx-auto">
          <div className="mt-8 font-semibold text-sm text-center">
            <h1>We Love To work with these Technologies </h1>
            <div className="w-60 h-15 border-3 border-solid border-blue-600 border- border-t border-r border-b rounded-3xl ml-10 mt-3"></div>
          </div>

          <div className="bg-gray-50 h-24 w-11/12 mt-6 rounded-lg border-3 border-sky-400">
            <div className="flex overflow-hidden">
              <div className="animate-loop-scroll flex justify-center mt-8 gap-5">
                <div>
                  <Image
                    src={ReactImage}
                    className="max-w-none"
                    height={40}
                    width={40}
                  />
                </div>

                <div>
                  <Image
                    src={NodeImage}
                    className="max-w-none"
                    height={40}
                    width={40}
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    className="max-w-none"
                    height={40}
                    width={40}
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    className="max-w-none"
                    height={40}
                    width={40}
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    className="max-w-none"
                    height={40}
                    width={40}
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    className="max-w-none"
                    height={40}
                    width={40}
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    className="max-w-none"
                    height={40}
                    width={40}
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    className="max-w-none"
                    height={40}
                    width={40}
                  />
                </div>
              </div>

              <div
                className="animate-loop-scroll flex justify-center mt-5 gap-8"
                aria-hidden="false"
              >
                <div>
                  <Image
                    src={ReactImage}
                    height={50}
                    width={50}
                    className="max-w-none"
                  />
                  {/* <span className="">wordpress</span> */}
                </div>

                <div>
                  <Image
                    src={NodeImage}
                    height={10}
                    width={50}
                    className="max-w-none"
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    height={40}
                    width={40}
                    className="max-w-none"
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    height={40}
                    width={40}
                    className="max-w-none"
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    height={40}
                    width={40}
                    className="max-w-none"
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    height={40}
                    width={40}
                    className="max-w-none"
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    height={40}
                    width={40}
                    className="max-w-none"
                  />
                </div>

                <div>
                  <Image
                    src={wordpressIcon}
                    height={40}
                    width={40}
                    className="max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default technologies;
