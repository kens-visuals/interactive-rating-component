import { RadioGroup } from '@headlessui/react';

export default function Ratings({ rating, setRating }) {
  const ratings = [1, 2, 3, 4, 5];

  const ratingsDisplay = ratings.map((r) => (
    <RadioGroup value={rating} onChange={setRating} key={r}>
      <RadioGroup.Option
        value={r}
        className="flex items-center justify-center focus-visible:rounded-full focus-visible:outline focus-visible:outline-white"
      >
        {({ checked }) => (
          <span
            className={`h-10 w-10 rounded-full py-3 text-center text-sm transition-all duration-300 hover:cursor-pointer hover:bg-secondary hover:text-white  md:h-12 md:w-12 md:py-4 ${
              checked ? 'bg-primary-light text-white' : 'bg-primary-reduced'
            }`}
          >
            {r}
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  ));

  return <>{ratingsDisplay}</>;
}
