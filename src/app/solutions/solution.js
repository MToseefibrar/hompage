import React from "react";

const solution = () => {
  return (
    <div>
      <section className="bg-gray-50 h-96 pb-10">
        <div className="flex justify-center flex-col items-center max-w-5xl mx-auto">
          <div className="mt-8 font-semibold text-sm text-center">
            <h1>Solutions We Deliver </h1>
            {/* <div className={style.blueLine}></div> */}
            <p className="font-light text-base pt-3">
              Unlock business success with SmartAdriots. Your partner for
              exceptional software solutions.
            </p>
            <p className="font-light text-base">
              From team augmentation to work outsourcing.
            </p>
          </div>

          <div className="flex mt-8">
            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100 rounded-tl-xl p-4 h-14 w-60 hover:shadow-sm font-semibold">
              ERP
            </div>

            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100   h-14 w-60">
              <h5 className="font-semibold">Entireprice Applications</h5>
            </div>

            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100   h-14 w-60">
              <h5 className="font-semibold">CRM</h5>
            </div>

            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100 rounded-tr-xl p-4  h-14 w-60">
              <h5 className="font-semibold">HR Software</h5>
            </div>
          </div>

          <div className="flex">
            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100   h-14 w-60 hover:shadow-sm">
              <h5 className="font-semibold">Mobile Apps</h5>
            </div>

            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100   h-14 w-60">
              <h5 className="font-semibold">ELearning Software</h5>
            </div>

            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100   h-14 w-60">
              <h5 className="font-semibold">Ecommerce</h5>
            </div>

            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100   h-14 w-60">
              <h5 className="font-semibold">Data Analytics</h5>
            </div>
          </div>

          <div className="flex">
            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100 rounded-bl-xl p-4   h-14 w-60 hover:shadow-sm">
              <h5 className="font-semibold">Web Portals</h5>
            </div>

            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100   h-14 w-60">
              <h5 className="font-semibold">ITSM</h5>
            </div>

            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100   h-14 w-60">
              <h5 className="font-semibold">Implementation</h5>
            </div>

            <div className="flex justify-center items-center  bg-white border-2 border-solid border-gray-100 rounded-br-xl p-4   h-14 w-60">
              <h5 className="font-semibold">Migration</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default solution;
