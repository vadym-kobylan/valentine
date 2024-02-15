import beargif from './assets/bear.gif';

import './App.css';
import { useState } from 'react';

function App() {
  const [loveYou, setLoveYou] = useState(true);

  const [position, setPosition] = useState({
    position: 'block',
    x: 0,
    y: 0,
  });

  const handleHover = () => {
    const newPosition = {
      position: 'absolute',
      x: (Math.random() * 2 - 1) * (window.innerWidth / 2 - 100), // Subtracting element width
      y: (Math.random() * 2 - 1) * (window.innerHeight / 2 - 50), // Subtracting element height
    };

    setPosition(newPosition);
  };

  return (
    <div className="loveBlock">
      {loveYou ? (
        <>
          <h1>Will you be my Valentine?</h1>
          <div className="loveButtonBlock">
            <button onClick={() => setLoveYou(false)} className="loveButton yes">
              Yes
            </button>
            <button
              onClick={handleHover}
              onMouseEnter={handleHover}
              className="loveButton no"
              style={{
                position: position.position,
                top: position.y + 'px',
                left: position.x + 'px',
              }}>
              No
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={beargif} alt="Bear Love" />
          <h1 className="loveTitle">LOVE YOU BABY!</h1>
        </>
      )}
    </div>
  );
}

export default App;
