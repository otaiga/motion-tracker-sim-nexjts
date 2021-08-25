import React, { useState, useEffect } from "react";

interface Opts {
  seconds: number;
  callback: (updatedTime: number) => void;
}

const Timer = (props: Opts) => {
  const { seconds, callback } = props;
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      const updatedTime = timeLeft - 1;
      setTimeLeft(updatedTime);
      callback(updatedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, callback]);

  return <p>{timeLeft}</p>;
};
export default Timer;
