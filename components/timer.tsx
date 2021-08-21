import React, { useState, useEffect } from "react";

interface Opts {
  seconds: number;
}

const Timer = (props: Opts) => {
  const [timeLeft, setTimeLeft] = useState(props.seconds);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 10);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return <p>{timeLeft}</p>;
};
export default Timer;
