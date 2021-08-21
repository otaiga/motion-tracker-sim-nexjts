import React, { useState } from "react";
import Head from "next/head";
import Timer from "../components/timer";

const Home = () => {
  const [markerCount, setmarkerCount] = useState(0);

  return (
    <div className="bg-black h-screen mx-auto overflow-hidden relative">
      <Head>
        <title>Motion Tracker</title>
        <meta name="description" content="Motion Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col items-center">
          <div className="animate-scenario absolute lg:top-0 top-1/2">
            <img
              src="./trackerImage.svg"
              alt="Picture of radar background"
              className="z-0 h-96 w-96 lg:h-full lg:w-full"
            />
            {/* <div className="flex animate-slow-pulse absolute">
              <div
                className={`bg-blue-200 border-blue-300 border-4 border-opacity-75 rounded-full h-12 w-12 md:h-24 md:w-24`}
              ></div>
            </div> */}
          </div>
          <div className="bg-white absolute top-1/2 h-96 w-96 lg:h-full lg:w-1/2 rounded-full animate-slow-ping"></div>
          <div className="flex bg-blue-400 text-white text-2xl md:text-5xl py-8 absolute bottom-0 h-1/4 w-full z-20 justify-around">
            <div className="flex justify-around w-full font-bold text-xs sm:text-base md:text-2xl lg:text-5xl">
              <p className="mr-10 sm:mr-24 md:mr-48">F.E.M.S. 5.562.92</p>
              <p className="ml-10 sm:ml-24 md:ml-48">CX. 54/38.10</p>
            </div>
            <div
              onClick={() => {
                markerCount === 0 ? setmarkerCount(2) : setmarkerCount(0);
              }}
              className="flex px-5 text-xl sm:text-2xl md:text-5xl font-bold absolute top-0 bg-black text-red-600 rounded-b-3xl w-28 h-8 sm:h-12 md:h-24 md:w-52 items-center justify-items-center justify-between p-4"
            >
              {markerCount === 0 ? 0 : <Timer seconds={350} />}
              <div className="flex flex-col text-xs leading-none md:leading-none sm:leading-none md:text-lg items-center">
                <p>10</p>
                <p>M</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
