import { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // setInterval schedules setTime to run every 1000ms, incrementing time by 1 each tick.
    // It returns intervalId, an identifier used later to cancel this specific interval.
   const intervalId = setInterval(() => {
     setTime((prev) => prev + 1);
   },1000);
   // cleanup: runs on unmount, stopping the interval so it doesn't keep firing after Timer is gone
   return () => {
    clearInterval(intervalId);
   }
  }
  // empty dependency array: effect runs once on mount and never re-runs (no cleanup/re-run on re-renders)
  , [])

  const handleChange = ({target}) => {
    setName(target.value);
  }

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type="text" />
    </>
  );
}