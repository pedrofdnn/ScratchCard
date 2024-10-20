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
                // Só atualiza o estado se a imagem ainda não foi revelada
                card.id === id && !card.isRevealed ? { ...card, isRevealed: true } : card
            )
        );

        // Incrementa a contagem apenas se o cartão ainda não foi revelado
        if (!cards.find(card => card.id === id)?.isRevealed) {
            setRevealedCount(prevCount => prevCount + 1);
        }

        // Verifica se o limite de revelações foi atingido para alterar a imagem
        if (revealedCount >= maxRevealsForImageChange) {
            const cardToChange = cards.find(card => card.isRevealed && card.image === bagImage);
            if (cardToChange) {
                setCards(prevCards =>
                    prevCards.map(card =>
                        card.id === cardToChange.id ? { ...card, image: loseImage } : card
                    )
                );
            }
        }
        console.log(id);
    };

    const resetGame = () => {
        shuffleCards();
        setMaxRevealsForImageChange(3);
        localStorage.setItem('revealedCount', revealedCount.toString());
        window.location.reload();
    };

    const handleResetPress = () => {
        const timer = setTimeout(() => {
            localStorage.setItem('revealedCount', '0');
            setRevealedCount(0);
            alert('Contagem Reiniciada')
        }, 7000);
        return () => clearTimeout(timer);
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
                <button onClick={resetGame}
                    onMouseDown={handleResetPress}
                    onMouseUp={handleResetPress}
                >
                    <IoReload className="button-reset" />
                </button>
            </div>
        </div>
    )
}
console.log(localStorage)