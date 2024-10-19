import ScratchCard from 'react-scratchcard-v2-temiyores-fork';
import coverImage from '../../Assets/img/COVER.png';
import hiddenImage from '../../Assets/img/bag.png';
import { useEffect } from 'react';


interface ScratchCardProps {
  id: number;
  image: string;
  onScratch: (id: number) => void;
  isRevealed: boolean;
  resetOverlay: () => void;
}

const scratchCardSettings = {
  width: 360,
  height: 130,
  image: coverImage,
  finishPercent: 96,
  color: '#C5C5C5',
};

export default function Scratch({ id, image, onScratch, isRevealed }: ScratchCardProps) {

  const handleScratch = () => {
    onScratch(id);
  };

  useEffect(() => {
    if (isRevealed) {
      // Reset the overlay image here (e.g., using a ref or state)
    }
  }, [isRevealed]);

  return (
    <div className="cardbox">
      <div className="scratch-card" onClick={handleScratch}>
        <ScratchCard
          {...scratchCardSettings}
          resetOverlay={resetOverlay}
        >
          <img src={image || hiddenImage} alt={`Card ${id}`} className="cardsImage" />
        </ScratchCard>
      </div>
    </div>
  );
}
