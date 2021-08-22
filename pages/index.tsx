import React, { useState } from "react";
import Head from "next/head";
import Timer from "../components/Timer";
import Marker from "../components/Marker";
import PopUp from "../components/Popup";

const Home = () => {
  const [countDownStarted, setCountDownStarted] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [timeSet, setTimeSet] = useState(0);
  const [markerPerc, setMarkerPerc] = useState("");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [markerAudio, setMarkerAudio] = useState<HTMLAudioElement | null>(null);

  const timerCallback = (updatedTime: number) => {
    if (updatedTime === 0) {
      setCountDownStarted(false);
      setMarkerAudio(null);
      setAudio(null);
    }
    const perc = 50 - ((100 / Number(timeSet)) * updatedTime) / 2;
    if (updatedTime < 5 && !markerAudio) {
      const markerPulse = new Audio("./markerPulse.mp3");
      setMarkerAudio(markerPulse);
    }
    setMarkerPerc(`${perc < 0 ? perc - perc * 0.5 : perc}%`);
  };

  const handleOkClick = (timerSet: number) => {
    setMarkerPerc("");
    setCountDownStarted(false);
    setTimeSet(timerSet);
    setCountDownStarted(true);
    setPopUp(false);
    if (!audio) {
      const pulse = new Audio("./pulse.mp3");
      setAudio(pulse);
    }
  };

  const handleCancelClick = () => {
    setTimeSet(0);
    setMarkerPerc("");
    setCountDownStarted(false);
    setAudio(null);
    setMarkerAudio(null);
    setPopUp(false);
  };

  if (audio) {
    audio.play();
  }
  if (markerAudio) {
    markerAudio.play();
  }

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
            onClick={() => {
              setPopUp(true);
            }}
            className="flex px-5 text-xl sm:text-2xl md:text-5xl font-bold absolute top-0 bg-black text-red-600 rounded-b-3xl w-28 h-12 sm:h-12 md:h-24 md:w-52 items-center justify-items-center justify-between p-4"
          >
            {countDownStarted ? (
              <Timer seconds={timeSet} callback={timerCallback} />
            ) : (
              0
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
      {/* <audio controls loop>
        <source src="./pulse.mp3" type="audio/mpeg"></source>
      </audio> */}
    </div>
  );
};

export default Home;
