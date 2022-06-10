import { useState, useEffect } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  });

  return <div>You spent {seconds} seconds on this page.</div>;
};
