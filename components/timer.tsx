import React, { useState, useEffect } from "react";

interface Opts {
  seconds: number;
  callback: (updatedTime: number) => void;
}

const Timer = (props: Opts) => {
  const [timeLeft, setTimeLeft] = useState(props.seconds);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      const updatedTime = timeLeft - 1;
      setTimeLeft(updatedTime);
      props.callback(updatedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return <p>{timeLeft}</p>;
};
export default Timer;
