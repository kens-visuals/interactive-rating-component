import { useState } from 'react';

// components
import BoxFront from './BoxFront';
import BoxBack from './BoxBack';

// { name, img, repo, site, goForward, setNum }
export default function Box({ ...boxDisplay }, setNum) {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const rateProject = (e) => {
    if (rating) {
      e.preventDefault();
      setIsSubmitted(true);
    }
  };

  const rateReset = (e) => {
    e.preventDefault();
    setNum(Math.floor(Math.random() * 5) + 1);
    setRating(0);
    setIsSubmitted(false);
  };

  return (
    <div
      className={`w-[87%] max-w-[25rem]  rounded-3xl bg-gradient-to-b from-primary to-primary/60 p-6 pb-8 md:p-10 ${
        isSubmitted && 'flex flex-col items-center justify-center'
      }`}
    >
      {isSubmitted ? (
        <BoxBack boxDisplay={boxDisplay} rateReset={rateReset} />
      ) : (
        <BoxFront
          boxDisplay={boxDisplay}
          rateProject={rateProject}
          rating={rating}
          setRating={setRating}
        />
      )}
    </div>
  );
}
