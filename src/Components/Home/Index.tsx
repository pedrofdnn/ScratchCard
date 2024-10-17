import { useEffect, useState } from "react";
import ScratchCard from "../Cards";
import bagImage from '../../Assets/img/bag.png'
import loseImage from '../../Assets/img/lose.png'
import yellowImage from '../../Assets/img/yellow.png'
import retryImage from '../../Assets/img/Retry.png'
import logoImage from '../../Assets/img/logo.png'
import { IoReload } from "react-icons/io5";

import '../../App.scss'

interface ScratchCardProps {
    id: number;
    image: string;
    onScratch: (id: number) => void;
}

export default function HomePage({ onScratch }: ScratchCardProps) {

    const [cards, setCards] = useState([
        { id: 1, image: bagImage },
        { id: 2, image: loseImage },
        { id: 3, image: retryImage },
        { id: 4, image: yellowImage },
    ]);

    const shuffleCards = () => {
        const shuffled = [...cards];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const c = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[c]] = [shuffled[c], shuffled[i]];
        }
        setCards(shuffled);
    };

    const handleScratch = (id: number) => {
        onScratch(id);
    };

    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <div className="container-geral">
            <h1>Raspadinha</h1>
            <img src={logoImage} alt="" />
            <div className="scratch-cards-container"> {cards.map((cards) => (
                <ScratchCard
                    key={cards.id}
                    id={cards.id}
                    image={cards.image}
                    onScratch={handleScratch}
                />
            ))}
                <button onClick={shuffleCards} >
                    <IoReload className="button-reset" />
                </button>
            </div>
        </div>
    )
}
