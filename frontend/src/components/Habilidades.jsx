import React, { useEffect } from "react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Aos from "aos";

function Habilidades() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div id="habilidades" className="bg-[#1b212e] pt-16 pb-16">
        <div className="mx-2 sm:mx-2 md:mx-2 lg:mx-48 xl:mx-48">
          <div className="text-center pb-12">
            <h1
              id="titulo"
              className="text-5xl md:text-6xl text-[#ff4c4c] font-bold"
            >
              HABILIDADES
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
            <div
              data-aos="fade-up"
              className="py-5 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mx-2 sm:mx-2 md:mx-28 lg:mx-4 xl:mx-16 flex flex-col items-center rounded-lg "
            >
              <Image
                isBlurred
                width={100}
                alt="NextUI hero Image"
                src="/html.png"
              />
              <p className="text-white mt-2">HTML</p>
            </div>

            <div
              data-aos="fade-up"
              className="py-5 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mx-2 sm:mx-2 md:mx-28 lg:mx-4 xl:mx-16 flex flex-col items-center rounded-lg "
            >
              <Image
                isBlurred
                width={100}
                alt="NextUI hero Image"
                src="/css.png"
              />
              <p className="text-white mt-2">CSS</p>
            </div>

            <div
              data-aos="fade-up"
              className="py-5 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mx-2 sm:mx-2 md:mx-28 lg:mx-4 xl:mx-16 flex flex-col items-center rounded-lg "
            >
              <Image
                isBlurred
                width={100}
                alt="NextUI hero Image"
                src="/js.png"
              />
              <p className="text-white mt-2">JavaScript</p>
            </div>

            <div
              data-aos="fade-up"
              className="py-5 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mx-2 sm:mx-2 md:mx-28 lg:mx-4 xl:mx-16 flex flex-col items-center rounded-lg "
            >
              <Image
                isBlurred
                width={100}
                alt="NextUI hero Image"
                src="/node.png"
              />
              <p className="text-white mt-2">Node.js</p>
            </div>

            <div
              data-aos="fade-up"
              className="py-5 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mx-2 sm:mx-2 md:mx-28 lg:mx-4 xl:mx-16 flex flex-col items-center rounded-lg "
            >
              <Image
                isBlurred
                width={100}
                alt="NextUI hero Image"
                src="/react.png"
              />
              <p className="text-white mt-2">React</p>
            </div>

            <div
              data-aos="fade-up"
              className="py-5 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mx-2 sm:mx-2 md:mx-28 lg:mx-4 xl:mx-16 flex flex-col items-center rounded-lg "
            >
              <Image
                isBlurred
                width={100}
                alt="NextUI hero Image"
                src="/mysql.png"
              />
              <p className="text-white mt-2">MySQL</p>
            </div>

            <div
              data-aos="fade-up"
              className="py-5 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mx-2 sm:mx-2 md:mx-28 lg:mx-4 xl:mx-16 flex flex-col items-center rounded-lg "
            >
              <Image
                isBlurred
                width={100}
                alt="NextUI hero Image"
                src="/github.png"
              />
              <p className="text-white mt-2">Github</p>
            </div>

            <div
              data-aos="fade-up"
              className="py-5 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mx-2 sm:mx-2 md:mx-28 lg:mx-4 xl:mx-16 flex flex-col items-center rounded-lg "
            >
              <Image
                isBlurred
                width={100}
                alt="NextUI hero Image"
                src="/git.png"
              />
              <p className="text-white mt-2">Git</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Habilidades;
