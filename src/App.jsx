import { useState } from 'react';

// components
import Box from 'components/Box';
import Footer from 'components/Footer';

// assets
import DATA from './data.json';

function App() {
  const [num, setNum] = useState(0);

  const goForward = () => (num < DATA.length - 1 ? setNum(num + 1) : setNum(0));

  const boxDisplay = DATA[num];

  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto] items-center justify-items-center bg-tertiary font-Overpass text-primary-light">
      <Box {...boxDisplay} goForward={goForward} setNum={setNum} />
      <Footer />
    </div>
  );
}

export default App;
