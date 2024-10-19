import HomePage from "./Components/Home/test";
import './index.scss'

export default function App() {
  const handleScratch = (id: number) => {
    console.log(`Card ${id} foi riscado`);
  };
  return (
    <div>
      <HomePage id={0}
        image={""}
        onScratch={handleScratch} />
    </div>
  )
}
