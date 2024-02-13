import React from "react";
import Image from "next/image";
import processImage from "../Assets/works.png";
import wordpressIcon from "../Assets/Wordpress.png";

function process() {
  return (
    <div>
      <section className="bg-white h-2/3 mb-14  ">
        <div className="flex justify-center flex-col items-center max-w-5xl mx-auto">
          <div className="mt-8 font-semibold text-sm text-center">
            <h1>How We Work </h1>
            {/* <div className={style.blueLine}></div> */}
            <p className="font-light text-base pt-3">
              Unlock business success with SmartAdriots. Your partner for
              exceptional software solutions.
            </p>
            <p className="font-light text-base">
              From team augmentation to work outsourcing.
            </p>
          </div>

          <div className="flex gap-32 mt-20">
            <div className="mt-8">
              <Image src={processImage} height={400} width={400} />
            </div>

            <div className="processbox">
              <div className="flex justify-center items-center  gap-3 bg-sky-50 w-96 h-14 rounded-lg border-2 border-blue-100">
                <Image src={wordpressIcon} height={40} width={40} />
                <div className="flex-col">
                  <h5 className="font-bold mt-1"> Plan & Analysic</h5>
                  <p className="font-normal pb-1">
                    lorem ipsum is the best way to handle it.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center mt-3  gap-3 bg-sky-50 w-96 h-14 rounded-lg border-2 border-blue-100">
                <Image src={wordpressIcon} height={40} width={40} />
                <div className="flex-col">
                  <h5 className="font-bold mt-1"> Designing</h5>
                  <p className="font-normal pb-1">
                    lorem ipsum is the best way to handle it.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center mt-3 gap-3 bg-sky-50 w-96 h-14 rounded-lg border-2 border-blue-100">
                <Image src={wordpressIcon} height={40} width={40} />
                <div className="flex-col">
                  <h5 className="font-bold mt-1"> Develop & Code</h5>
                  <p className="font-normal pb-1">
                    lorem ipsum is the best way to handle it.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center mt-3  gap-3 bg-sky-50 w-96 h-14 rounded-lg border-2 border-blue-100">
                <Image src={wordpressIcon} height={40} width={40} />
                <div className="flex-col">
                  <h5 className="font-bold mt-1"> Testing</h5>
                  <p className="font-normal pb-1">
                    lorem ipsum is the best way to handle it.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center mt-3  gap-3 bg-sky-50 w-96 h-14 rounded-lg border-2 border-blue-100">
                <Image src={wordpressIcon} height={40} width={40} />
                <div className="flex-col">
                  <h5 className="font-bold mt-1"> Development</h5>
                  <p className="font-normal pb-1">
                    Unlock business success with SmartAdriots.{" "}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center mt-3  gap-3 bg-sky-50 w-96 h-14 rounded-lg border-2 border-blue-100">
                <Image src={wordpressIcon} height={40} width={40} />
                <div className="flex-col">
                  <h5 className="font-bold mt-1"> Plan & Analysic</h5>
                  <p className="font-normal pb-1">
                    Unlock business success with SmartAdriots.{" "}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center mt-3  gap-3 bg-sky-50 w-96 h-14 rounded-lg border-2 border-blue-100">
                <Image src={wordpressIcon} height={40} width={40} />
                <div className="flex-col">
                  <h5 className="font-bold mt-1">Reviewing</h5>
                  <p className="font-normal pb-1">
                    Unlock business success with SmartAdriots.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default process;
