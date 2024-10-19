import { useEffect, useState } from "react";
import ScratchCard from "../Cards/test";
import bagImage from '../../Assets/img/bag.png'
import loseImage from '../../Assets/img/lose.png'
import yellowImage from '../../Assets/img/yellow.png'
import retryImage from '../../Assets/img/Retry.png'
import logoImage from '../../Assets/img/logo.png'
import { IoReload } from "react-icons/io5";
import '../../App.scss'


export default function HomePage() {

    const [revealedCount, setRevealedCount] = useState(0);
    const [maxRevealsForImageChange, setMaxRevealsForImageChange] = useState(3);

    const [cards, setCards] = useState([
        { id: 1, image: bagImage, isRevealed: false },
        { id: 2, image: loseImage, isRevealed: false },
        { id: 3, image: retryImage, isRevealed: false },
        { id: 4, image: yellowImage, isRevealed: false },
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
        setCards(prevCards =>
            prevCards.map(card =>
                card.id === id ? { ...card, isRevealed: true } : card
            )
        );
        setRevealedCount(prevCount => prevCount + 1);
        if (revealedCount >= maxRevealsForImageChange) {
            const cardToChange = cards.find(card => card.isRevealed && card.image === bagImage);
            if (cardToChange) {
                setCards(prevCards =>
                    prevCards.map(card =>
                        card.id === cardToChange.id ? { ...card, image: loseImage } : card
                    )
                );
            } else {

            }
        }
        console.log(id)
    };

    const resetOverlay = () => {
        // Logic to reset the overlay image (e.g., using a ref or state)
    };

    const resetGame = () => {
        shuffleCards();
        setCards(prevCards => prevCards.map(card => ({ ...card, isRevealed: false })));
        setRevealedCount(0);
        setMaxRevealsForImageChange(3); // Reinicie o limite para um novo jogo
    };

    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <div className="container-geral">
            <h1>Raspadinha</h1>
            <img src={logoImage} alt="logo" className="logo" />
            <div className="scratch-cards-container"> {cards.map((cards) => (
                <ScratchCard
                    key={cards.id}
                    id={cards.id}
                    image={cards.image}
                    onScratch={handleScratch}
                    isRevealed={cards.isRevealed}
                    resetOverlay={resetOverlay}
                />
            ))}
                <button onClick={resetGame} >
                    <IoReload className="button-reset" />
                </button>
            </div>
        </div>
    )
}
