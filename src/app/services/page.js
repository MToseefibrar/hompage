import Header from "../header/page";
import styles from "../../app/Services/services.module.css";
import Image from "next/image";
import wordpressIcon from "../Assets/Wordpress.png";

function Services() {
  return (
    <div>
      <section className="bg-white pb-14">
        <div className="flex justify-center items-center mx-auto flex-col">
          <div className="flex flex-col items-center pt-10">
            <h1 className="font-semibold text-3xl mt-2">Our Services </h1>
            <div className="w-36 h-15 border-3 border-solid border-blue-600 border-t border-r border-b rounded-3xl  mt-2"></div>
            <p className="pt-3 leading-6">
              Unlock business success with SmartAdriots. Your partner for
              exceptional software solutions.
            </p>
            <p>From team augmentation to work outsourcing.</p>
          </div>

          <div className="flex mt-14 mx-auto">
            <div className="border-2 border-gray-400 border-opacity-35 rounded-lg h-72 w-96 mx-auto ml-5 text-center leading-22 hover:border-blue-500 transition duration-200 ease-in hover:shadow-lg transition duration-300 ease-in-out">
              <Image
                src={wordpressIcon}
                className="mx-auto mt-6"
                height={80}
                width={90}
                alt=""
              />
              <h4 className="font-bold mt-9">Wordpress Website Development</h4>
              <p className="mt-3 ml-2 mr-2 leading-snug">
                Unlock business success with SmartAdriots. Your partner for
                exceptional software solutions. From team augmentation.
              </p>
            </div>

            <div className="border-2 border-gray-400 border-opacity-35 rounded-lg h-72 w-96 mx-auto ml-5 text-center leading-22 hover:border-blue-500 transition duration-200 ease-in hover:shadow-lg transition duration-300 ease-in-out">
              <Image
                src={wordpressIcon}
                className="mx-auto mt-6"
                height={80}
                width={90}
                alt=""
              />
              <h4 className="font-bold mt-9">Wordpress Website Development</h4>
              <p className="mt-3 ml-2 mr-2 leading-snug">
                Unlock business success with SmartAdriots. Your partner for
                exceptional software solutions. From team augmentation.
              </p>
            </div>

            <div className="border-2 border-gray-400 border-opacity-35 rounded-lg h-72 w-96 mx-auto ml-5 text-center leading-22 hover:border-blue-500 transition duration-200 ease-in hover:shadow-lg transition duration-300 ease-in-out">
              <Image
                src={wordpressIcon}
                className="mx-auto mt-6"
                height={80}
                width={90}
                alt=""
              />
              <h4 className="font-bold mt-9">Wordpress Website Development</h4>
              <p className="mt-3 ml-2 mr-2 leading-snug">
                Unlock business success with SmartAdriots. Your partner for
                exceptional software solutions. From team augmentation.
              </p>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="border-2 border-gray-400 border-opacity-35 rounded-lg h-72 w-96 mx-auto ml-5 text-center leading-22 hover:border-blue-500 transition duration-200 ease-in hover:shadow-lg transition duration-300 ease-in-out">
              <Image
                src={wordpressIcon}
                className="mx-auto mt-6"
                height={80}
                width={90}
                alt=""
              />
              <h4 className="font-bold mt-9">Wordpress Website Development</h4>
              <p className="mt-3 ml-2 mr-2 leading-snug">
                Unlock business success with SmartAdriots. Your partner for
                exceptional software solutions. From team augmentation.
              </p>
            </div>

            <div className="border-2 border-gray-400 border-opacity-35 rounded-lg h-72 w-96 mx-auto ml-5 text-center leading-22 hover:border-blue-500 transition duration-200 ease-in hover:shadow-lg transition duration-300 ease-in-out">
              <Image
                src={wordpressIcon}
                className="mx-auto mt-6"
                height={80}
                width={90}
                alt=""
              />
              <h4 className="font-bold mt-9">Wordpress Website Development</h4>
              <p className="mt-3 ml-2 mr-2 leading-snug">
                Unlock business success with SmartAdriots. Your partner for
                exceptional software solutions. From team augmentation.
              </p>
            </div>

            <div className="border-2 border-gray-400 border-opacity-35 rounded-lg h-72 w-96 mx-auto ml-5 text-center leading-22 hover:border-blue-500 transition duration-200 ease-in hover:shadow-lg transition duration-300 ease-in-out">
              <Image
                src={wordpressIcon}
                className="mx-auto mt-6"
                height={80}
                width={90}
                alt=""
              />
              <h4 className="font-bold mt-9">Wordpress Website Development</h4>
              <p className="mt-3 ml-2 mr-2 leading-snug">
                Unlock business success with SmartAdriots. Your partner for
                exceptional software solutions. From team augmentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
