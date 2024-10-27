import { useEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import { useState } from 'react';
function App() {
  const [forward, setForward] = useState(true);
  const scale = 2;
  const duration = 3; // in seconds

  useEffect(() => {
    const start = forward ? scale : 1;
    const end = forward ? 1 : scale;
    gsap.fromTo(
      '.grid',
      { scale: start },
      { scale: end, duration, ease: 'power1.out' }
    );
    gsap.fromTo(
      '.grid video',
      { scale: 1 / start },
      { scale: 1 / end, duration, ease: 'power1.out' }
    );
  }, [forward]);

  return (
    <div className="container" onClick={() => setForward(!forward)}>
      <div className="grid">
        <div className="a">
          <div>
            <video
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
        <div className="b">
          <img src="https://picsum.photos/id/231/800/500" alt="" />
        </div>
        <div className="c">
          <img src="https://picsum.photos/id/232/800/500" alt="" />
        </div>
        <div className="d">
          <img src="https://picsum.photos/id/233/800/500" alt="" />
        </div>
        <div className="e">
          <img src="https://picsum.photos/id/234/800/500" alt="" />
        </div>
        <div className="f">
          <img src="https://picsum.photos/id/235/800/500" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
