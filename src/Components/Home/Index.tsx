import { useState } from "react";
import ScratchCard from "../Cards";
import bagImage from '../../Assets/img/bag.png'

interface ScratchCardProps {
    id: number;
    image: string;
    onScratch: (id: number) => void;
}

export default function HomePage({ id, image, onScratch }: ScratchCardProps) {

    const [cards, setCards] = useState([
        { id: 1, image: bagImage },
        { id: 2, image: '/path/to/image2.jpg' },
        { id: 3, image: '/path/to/image3.jpg' },
        { id: 4, image: '/path/to/image4.jpg' },
    ]);

    const shuffleCards = () => {
        const shuffled = [...cards].sort(() => Math.random() - 0.5);
        setCards(shuffled);
    };

    const handleScratch = (id: number) => {
        onScratch(id);
    };

    return (
        <div className="home__container">
            {cards.map((cards) => (
                <ScratchCard
                    key={cards.id}
                    id={cards.id}
                    image={cards.image}
                    onScratch={handleScratch}
                />
            ))}

            <div>
                <button onClick={shuffleCards} >Reiniciar Cards</button>
                <img src={image} alt={`Card ${id} ${image}`} />
            </div>
        </div>
    )
}
