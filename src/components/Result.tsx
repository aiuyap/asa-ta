import { useEffect, useRef, useState } from 'react';
import './Result.css';

function Result() {
  const results = [
    'Malapascua Island',
    'Temple of Leah',
    'Bantayan Island',
    'Magdakpanay sa Lovers',
    'Kawasan Falls',
    'Osmeña Peak',
    'TCH',
    'Oslob Whale Sharks',
    'Tumalog Falls',
    `Edsnath's Payag`,
    'Ila Joujiel',
    'Kaog Balut',
    'Magpabukid sa dagat',
    'Mountain View',
    'SM Seaside',
    'Little Kyoto',
    'Ihawn ang manok nila Melvin',
    'Magcamping sa gawas ila Mapex',
  ];

  const [selectedWord, setSelectedWord] = useState<string>('');
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const rouletteRef = useRef<HTMLDivElement | null>(null);

  // Function to spin and pick a random word
  const spinRoulette = () => {
    setIsSpinning(true);
    let spinCount = 0;
    const intervalId = setInterval(() => {
      if (spinCount >= 30) {
        // Stop after 30 spins
        clearInterval(intervalId);
        setIsSpinning(false);
        // Pick a random word from the array
        const randomWord = results[Math.floor(Math.random() * results.length)];
        setSelectedWord(randomWord);
      } else {
        // Simulate roulette spinning effect
        const randomIndex = Math.floor(Math.random() * results.length);
        setSelectedWord(results[randomIndex]);
        spinCount++;
      }
    }, 100); // Change word every 100ms
  };

  useEffect(() => {
    spinRoulette();
  }, []);

  return (
    <>
      <div className="app">
        <div className="roulette" ref={rouletteRef}>
          <p className={`word ${isSpinning ? 'spinning' : ''}`}>
            {selectedWord}
          </p>
        </div>
        <button onClick={spinRoulette} disabled={isSpinning}>
          {isSpinning ? 'Hahay...' : 'Lahi nasad'}
        </button>
      </div>
    </>
  );
}

export default Result;
