import { useState } from "react";
import ScratchCard from "../Cards";
import bagImage from '../../Assets/img/bag.png'
import loseImage from '../../Assets/img/lose.png'
import yellowImage from '../../Assets/img/yellow.png'
import retryImage from '../../Assets/img/Retry.png'
import '../../App.scss'

interface ScratchCardProps {
    id: number;
    image: string;
    onScratch: (id: number) => void;
}

export default function HomePage({ id, image, onScratch }: ScratchCardProps) {

    const [cards, setCards] = useState([
        { id: 1, image: bagImage },
        { id: 2, image: loseImage },
        { id: 3, image: retryImage },
        { id: 4, image: yellowImage },
    ]);

    const shuffleCards = () => {
        const shuffled = [...cards].sort(() => Math.random() - 0.5);
        setCards(shuffled);
    };

    const handleScratch = (id: number) => {
        onScratch(id);
    };

    return (
        <div className="container-geral">
            <h1>Raspadinha</h1>

            <div className="scratch-cards-container"> {cards.map((cards) => (
                <ScratchCard

                    key={cards.id}
                    id={cards.id}
                    image={cards.image}
                    onScratch={handleScratch}
                />
            ))}

                <div className="button-reset">
                    <button onClick={shuffleCards} >Reiniciar Cards</button>
                    <img src={image} alt={`Card ${id} ${image}`} />
                </div>
            </div>
        </div>
    )
}
