
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
    <div>
      <div className="scratch-card" onClick={handleScratch}>
        {image}
      </div>

    </div>
  )
}
