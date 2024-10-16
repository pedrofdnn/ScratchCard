import '../../App.scss'

interface CardsProps {
  id: number;
  image: string;
  onScratch: (id: number) => void;
}

export default function ScratchCard({ id, image, onScratch }: CardsProps) {

  const handleScratch = () => {
    onScratch(id);
  };

  return (
    <div className='cardbox'>      
      <div className="scratch-card" onClick={handleScratch}>
        <img src={image} alt={`Card ${id}`} className={'cardsImage'} />
      </div>

    </div>
  )
}
