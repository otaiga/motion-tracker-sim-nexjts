import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Timer from "../components/timer";
import trackerImg from "../public/trackerImage.png";

const Home = () => {
  const [markerCount, setmarkerCount] = useState(0);
  const [markers, setMarkers] = useState<({ [key: string]: string } | null)[]>(
    []
  );

  const possibleValues = ["0", "1/4", "1/3", "1/2"];
  const possibleDirections = ["right", "left"];

  const createMarkers = () => {
    const newMarkers = [];
    for (let i = 0; i < markerCount; i++) {
      const direction =
        possibleDirections[
          Math.floor(Math.random() * possibleDirections.length)
        ];
      const value1 =
        possibleValues[Math.floor(Math.random() * possibleValues.length)];
      const value2 =
        possibleValues[Math.floor(Math.random() * possibleValues.length)];
      newMarkers.push({ value1, value2, direction });
    }
    return newMarkers;
  };

  return (
    <div className="bg-black h-screen mx-auto overflow-hidden relative">
      <Head>
        <title>Motion Tracker</title>
        <meta name="description" content="Motion Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex justify-center items-center">
          <div className="top-80 md:top-0 relative animate-scenario">
            <Image
              src={trackerImg}
              alt="Picture of radar background"
              className="z-0"
            />
            <div className="flex animate-slow-pulse">
              {createMarkers().map((marker, index) => (
                <div
                  key={`${index}`}
                  className={`bg-blue-200 border-blue-300 border-4 border-opacity-75 rounded-full h-12 w-12 md:h-24 md:w-24 absolute top-${marker.value1} ${marker.direction}-${marker.value2}`}
                ></div>
              ))}
            </div>
          </div>
          <div className="bg-white absolute h-48 bottom-1/4 lg:-bottom-1/4 lg:h-full w-48 lg:w-1/2 rounded-full animate-slow-ping"></div>
          <div className="flex bg-blue-400 text-white text-2xl md:text-5xl py-8 md:py-12 absolute bottom-0 h-1/3 w-full z-20 justify-around">
            <div className="flex justify-around w-full font-bold text-base md:text-2xl lg:text-5xl">
              <p className="mr-24 md:mr-48">F.E.M.S. 5.562.92</p>
              <p className="ml-24 md:ml-48">CX. 54/38.10</p>
            </div>
            <div
              onClick={() => {
                markerCount === 0 ? setmarkerCount(2) : setmarkerCount(0);
              }}
              className="flex px-5 text-2xl md:text-5xl font-bold absolute top-0 bg-black text-red-600 rounded-b-3xl w-28 h-12 md:h-24 md:w-52 items-center justify-items-center justify-between p-4"
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
