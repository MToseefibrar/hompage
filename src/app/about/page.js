import styles from "../../app/about.module.css";
import Image from "next/image";
import builsingImage from "../Assets/building.png";
import DottedImage from "../Assets/dotts.png";

function About() {
  return (
    <>
      <section className="flex justify-evenly bg-blue-950 h-dvh">
        <div className="relative flex justify-between mx-auto gap-10 items-center">
          {/* <Image
            src={DottedImage}
            className="absolute top-0 left-0"
            height={150}
            width={150}
          /> */}
          <div>
            <Image src={builsingImage} width={550} height={360} />
          </div>
          <div>
            <h3 className="text-white">About Us</h3>
            <div className="w-20 h-15 border-3 border-solid border-blue-600 border-t border-r border-b rounded-3xl  mt-1"></div>
            <div className="text-white leading-9 text-2xl font-semibold mt-3">
              <h3>We’re On Mission To </h3>
              <h3> Help Business Grow </h3>
              <h3> Faster Thanever.</h3>
            </div>
            <div className="text-white  leading-6 font-thin pt-2">
              <p>
                Unlock business success with SmartAdriots.
                <br /> Your partner for exceptional software <br /> solutions.
                From team augmentation to work <br />
                outsourcing.
              </p>
            </div>

            <button class="w-28 h-11 rounded-full font-semibold text-white border-2 border-blue-100 hover:bg-blue-500 hover:text-white transition duration-200 mt-5 ">
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
