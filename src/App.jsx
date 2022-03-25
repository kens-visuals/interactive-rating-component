import { useState } from 'react';

import Box from 'components/Box';
import DATA from './data.json';

function App() {
  const [num, setNum] = useState(1);

  const goForward = () => (num < DATA.length - 1 ? setNum(num + 1) : setNum(0));

  const boxDisplay = DATA[num];

  return (
    <div className="flex min-h-screen items-center justify-center bg-tertiary font-Overpass text-primary-light">
      <Box {...boxDisplay} goForward={goForward} setNum={setNum} />
    </div>
  );
}

export default App;
