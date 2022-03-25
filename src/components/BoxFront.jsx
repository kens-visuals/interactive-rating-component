import Ratings from './Ratings';

// assets
import iconStar from 'images/icon-star.svg';

export default function BoxFront({
  rateProject,
  name,
  img,
  repo,
  site,
  goForward,
  rating,
  setRating,
}) {
  return (
    <>
      <h1 className="text-2xl font-normal text-white  md:text-3xl">{name}</h1>
      <div className="relative">
        <img
          src={iconStar}
          alt="star"
          className="absolute -top-4 -left-3 block w-10 max-w-full rounded-full bg-primary-reduced p-3 "
        />
        <img src={img} alt="" className="mt-4 rounded-xl" />
      </div>

      <div className="my-3 space-x-4 text-primary-light ">
        <a
          className="underline transition-all duration-300 hover:text-primary-dark"
          href={site}
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
        <a
          className="underline transition-all duration-300 hover:text-primary-dark"
          href={repo}
          target="_blank"
          rel="noreferrer"
        >
          Repository
        </a>
      </div>

      <span className="mt-4 text-xl font-normal text-secondary md:mt-8 md:text-2xl">
        How did I do?
      </span>

      <p className="mt-2 text-sm leading-6 text-primary-dark">
        Please let me know how I did with these projects. All feedback is
        appreciated to help me improve!
      </p>

      <div className="my-5 flex items-center justify-between">
        <Ratings rating={rating} setRating={setRating} />
      </div>

      <div className="flex flex-col md:flex-row md:gap-3">
        <button
          type="button"
          onClick={goForward}
          className="hover:pointer mt-3 w-full rounded-full border border-secondary p-3 font-Overpass text-sm font-normal uppercase tracking-widest  text-white transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-secondary focus-visible:outline focus-visible:outline-white md:w-1/2"
        >
          Skip
        </button>
        <button
          type="submit"
          onClick={rateProject}
          className="hover:pointer mt-3 w-full rounded-full bg-secondary p-3 font-Overpass text-sm font-normal uppercase tracking-widest  text-white transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-secondary focus-visible:outline focus-visible:outline-white md:w-1/2 "
        >
          Submit
        </button>
      </div>
    </>
  );
}
