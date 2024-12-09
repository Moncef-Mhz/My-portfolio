import { useState, useEffect } from "react";

type Props = {
  num: string;
  duration: string;
};

const Counter = ({ num, duration }: Props) => {
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = parseInt(num.substring(0, 3));

    if (start === end) return;

    const totalMilSecDur = parseInt(duration);
    const incrementTime = (totalMilSecDur / end) * 1000;

    const timer = setInterval(() => {
      start++;
      setCount(String(start) + num.substring(3));
      if (start === end) clearTimeout(timer);
    }, incrementTime);
  }, [num, duration]);
  return <>{count}</>;
};

export default Counter;
