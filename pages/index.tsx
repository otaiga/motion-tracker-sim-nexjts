import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import Head from "next/head";
import Timer from "../components/Timer";
import Marker from "../components/Marker";
import PopUp from "../components/Popup";

const pulse = new Howl({
  src: ["./pulse.mp3"],
});

const markerPulse = new Howl({
  src: ["./markerPulse.mp3"],
});

const Home = () => {
  const [countDownStarted, setCountDownStarted] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [timeSet, setTimeSet] = useState(0);
  const [markerPerc, setMarkerPerc] = useState("");
  const [playMarker, setPlayMarker] = useState(false);

  const timerCallback = (updatedTime: number) => {
    if (updatedTime === 0) {
      setCountDownStarted(false);
      setPlayMarker(false);
      return;
    }
    const perc = 50 - ((100 / Number(timeSet)) * updatedTime) / 2;
    if (updatedTime < 5) {
      setPlayMarker(true);
    } else {
      setPlayMarker(false);
    }
    setMarkerPerc(`${perc < 0 ? perc - perc * 0.5 : perc}%`);
  };

  const handleOkClick = (timerSet: number) => {
    pulse.play();
    setMarkerPerc("");
    setCountDownStarted(false);
    setTimeSet(timerSet);
    setCountDownStarted(true);
    setPopUp(false);
  };

  const handleCancelClick = () => {
    setTimeSet(0);
    setMarkerPerc("");
    setCountDownStarted(false);
    setPopUp(false);
    setPlayMarker(false);
  };

  useEffect(() => {
    if (countDownStarted) {
      pulse.play();
    }
    if (playMarker) {
      markerPulse.play();
    }
  }, [markerPerc]);

  return (
    <div className="bg-black h-screen mx-auto overflow-hidden relative">
      <Head>
        <title>Motion Tracker</title>
        <meta name="description" content="Motion Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <div className="animate-scenario absolute items-center justify-center portrait:bottom-2 landscape:top-4">
          <img
            src="./trackerImage.svg"
            alt="Picture of radar background"
            className="z-0 h-96 w-96 md:h-full md:w-full"
          />
          {countDownStarted && (
            <div className="animate-slow-pulse">
              <Marker top={markerPerc} left="50%" />
            </div>
          )}
        </div>
        <div className="bg-white absolute top-1/2 h-96 w-96 md:h-full md:w-1/2 rounded-full animate-slow-ping" />
        <div className="flex bg-blue-400 text-white text-2xl md:text-5xl py-8 absolute bottom-0 h-1/4 w-full z-20 justify-around">
          <div className="flex justify-around w-full font-bold text-xs sm:text-base md:text-2xl lg:text-5xl">
            <p className="mr-20 sm:mr-24 md:mr-48 pl-2">F.E.M.S. 5.562.92</p>
            <p className="ml-20 sm:ml-24 md:ml-48 pr-2">CX. 54/38.10</p>
          </div>
          <div
            role="button"
            onClick={() => {
              setCountDownStarted(false);
              setPopUp(true);
            }}
            className="flex px-5 text-xl sm:text-2xl md:text-5xl font-bold absolute top-0 border-4 border-t-0 border-blue-800 bg-black text-red-600 rounded-b-3xl w-28 h-12 sm:h-12 md:h-24 md:w-52 items-center justify-items-center justify-between p-4"
          >
            {countDownStarted ? (
              <Timer seconds={timeSet} callback={timerCallback} />
            ) : (
              <div className="animate-pulse">0</div>
            )}
            <div className="flex flex-col text-xs leading-none md:leading-none sm:leading-none md:text-lg items-center">
              <p>50</p>
              <p>M</p>
            </div>
          </div>
        </div>
      </main>
      {popUp && (
        <PopUp
          handleOkClick={handleOkClick}
          handleCancelClick={handleCancelClick}
        />
      )}
    </div>
  );
};

export default Home;
