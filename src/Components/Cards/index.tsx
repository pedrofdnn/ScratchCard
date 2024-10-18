import ScratchCard from 'react-scratchcard-v2-temiyores-fork';
import coverImage from '../../Assets/img/COVER.png';
import hiddenImage from '../../Assets/img/bag.png';


interface ScratchCardProps {
  id: number;
  image: string;
  onScratch: (id: number) => void;
}

const scratchCardSettings = {
  width: 300,
  height: 130,
  image: coverImage,
  finishPercent: 96,
  color: '#C5C5C5',
};

export default function Scratch({ id, image, onScratch }: ScratchCardProps) {
  const handleScratch = () => {
    onScratch(id);
  };

  return (
    <div className="cardbox">
      <div className="scratch-card" onClick={handleScratch}>
        <ScratchCard {...scratchCardSettings}  >
          <img src={image || hiddenImage} alt={`Card ${id}`} className="cardsImage" />
        </ScratchCard>
      </div>
    </div>
  );
}
