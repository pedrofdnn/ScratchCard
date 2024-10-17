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
  height: 150,
  image: coverImage,
  finishPercent: 80, 
  onComplete: () => ('') 
};

export default function Scratch({ id, image, onScratch }: ScratchCardProps) {
  const handleScratch = () => {
    onScratch(id);
  };

  return (
    <div className="scratch-card-container">
      <ScratchCard color={''} {...scratchCardSettings}>
        <img src={image || hiddenImage} alt={`Card ${id}`} className="cardsImage" />
      </ScratchCard>
    </div>
  );
}
