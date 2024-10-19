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

    const [maxRevealsForImageChange, setMaxRevealsForImageChange] = useState(3);
  
    const [cards, setCards] = useState([
        { id: 1, image: bagImage, isRevealed: false },
        { id: 2, image: loseImage, isRevealed: false },
        { id: 3, image: retryImage, isRevealed: false },
        { id: 4, image: yellowImage, isRevealed: false },
    ]);

    const [revealedCount, setRevealedCount] = useState(() => {
        const storedCount = localStorage.getItem('revealedCount');
        return storedCount ? parseInt(storedCount) : 0;
    });

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

    const resetGame = () => {
        shuffleCards();
        setMaxRevealsForImageChange(3);
        // Update localStorage with the current revealedCount
        localStorage.setItem('revealedCount', revealedCount.toString());
        // Force a full page reload to ensure state updates are reflected
        window.location.reload();
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


                />
            ))}
                <button onClick={resetGame} >
                    <IoReload className="button-reset" />
                </button>
            </div>
        </div>
    )
}
