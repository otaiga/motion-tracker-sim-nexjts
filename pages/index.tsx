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
  const [firstLoad, setFirstLoad] = useState(true);
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
    if (updatedTime < 10) {
      const value = 10 - updatedTime;
      markerPulse.rate(0.1 * value + 1);
      if (!playMarker) {
        setPlayMarker(true);
      }
    } else {
      markerPulse.rate(0);
      if (playMarker) {
        setPlayMarker(false);
      }
    }
    setMarkerPerc(`${perc < 0 ? perc - perc * 0.5 : perc}%`);
  };

  const handleOkClick = (timerSet: number) => {
    if (timerSet === 0) {
      return handleCancelClick();
    }
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
  }, [markerPerc, countDownStarted, playMarker]);

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
            src="./trackerBlips.svg"
            alt="Picture of radar blips"
            className="absolute z-10 h-96 w-96 md:h-full md:w-full animate-slow-ping"
          />
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
        <div className="flex bg-blue-400 text-white text-2xl md:text-5xl py-8 absolute bottom-0 h-1/4 w-full z-20 justify-around">
          <div className="flex justify-around w-full font-bold text-xs sm:text-base md:text-2xl lg:text-5xl">
            <p className="mr-20 sm:mr-24 md:mr-48 pl-2">F.E.M.S. 5.562.92</p>
            <p className="ml-20 sm:ml-24 md:ml-48 pr-2">CX. 54/38.10</p>
          </div>
          <div className="flex flex-col absolute top-0 items-center">
            <div
              role="button"
              tabIndex={0}
              onClick={() => {
                setCountDownStarted(false);
                setPopUp(true);
              }}
              className="flex px-5 text-xl sm:text-2xl md:text-5xl font-bold top-0 bg-black text-red-600 rounded-b-3xl w-28 h-12 sm:h-12 md:h-24 md:w-52 items-center justify-items-center justify-between p-4"
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
        </div>
      </main>
      {popUp && (
        <PopUp
          handleOkClick={handleOkClick}
          handleCancelClick={handleCancelClick}
        />
      )}
      {firstLoad && (
        <div>
          <div className="fixed inset-0 max-w-screen-lg mx-auto rounded opacity-75 pointer-events-none" />
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-blue-400 rounded shadow-lg sm:max-w-sm">
              <div className="px-6 py-4 text-left modal-content text-white">
                <div className="flex items-center justify-between pb-3">
                  <p className="text-2xl font-bold ">Motion Tracker</p>
                </div>
                <div className="mb-1 text-lg">
                  To set the timer, click the counter.
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    tabIndex={1}
                    className={`px-4 py-1 bg-black text-green-500 mx-2 rounded outline-none focus:outline-none`}
                    onClick={() => {
                      setFirstLoad(false);
                    }}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
