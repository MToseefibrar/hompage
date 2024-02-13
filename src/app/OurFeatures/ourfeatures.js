import styles from "../../app/OurFeatures/features.module.css";
import Image from "next/image";
import wordpressIcon from "../Assets/Wordpress.png";

function ourfeatures() {
  return (
    <div>
      <section className="bg-gray-50 h-96">
        <div className="flex justify-center items-center flex-col mx-auto">
          <div className="mt-8 font-semibold text-sm">
            <h1>Our Unique Features </h1>
            <div className={styles.blueLine}></div>
          </div>
          <div className="mt-5">
            <div className="flex">
              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60 hover:shadow-sm">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Consulting</h5>
              </div>

              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Security</h5>
              </div>

              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Implementation</h5>
              </div>

              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Migration</h5>
              </div>
            </div>

            <div className="flex">
              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Wordpress</h5>
              </div>

              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Help</h5>
              </div>

              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Easy Customize</h5>
              </div>

              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Css Animation</h5>
              </div>
            </div>

            <div className="flex">
              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">24/7 Support</h5>
              </div>

              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Documentation</h5>
              </div>

              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Bootstrap Grid</h5>
              </div>

              <div className="flex justify-center items-center gap-3 bg-white border-2 border-solid border-gray-100 rounded-lg ml-2 mt-2 h-14 w-60">
                <Image src={wordpressIcon} height={10} width={30} />
                <h5 className="font-semibold">Consulting</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ourfeatures;
