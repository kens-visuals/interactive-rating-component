// assets
import illustration from 'images/illustration-thank-you.svg';

export default function BoxBack({ rateReset, rating }) {
  return (
    <>
      <img
        src={illustration}
        alt="thank you illustration"
        className="block max-w-full"
      />

      <span className="my-6 inline-block rounded-full bg-primary-reduced p-3.5 align-middle text-sm leading-0 text-secondary md:my-8 md:p-4 md:px-6 ">
        You selected {rating} out of 5
      </span>

      <h1 className="md:text-3x text-2xl font-normal text-white">Thank you!</h1>
      <p className="mt-2 text-center text-sm leading-6 text-primary-dark">
        I appreciate you taking the time to give a rating. This review will help
        me to improve my future work.
      </p>
      <button
        type="button"
        onClick={rateReset}
        className="hover:pointer mt-3 w-full rounded-full border border-secondary p-3 font-Overpass text-sm font-normal uppercase tracking-widest  text-white transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-secondary focus-visible:outline focus-visible:outline-white md:w-1/2"
      >
        Rate again
      </button>
    </>
  );
}
