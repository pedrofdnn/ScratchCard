import HomePage from "./Components/Home/Index";
import './index.scss'

export default function App() {
  return (
    <div className="pageDefault">
      <HomePage id={0} image={""} onScratch={function (): void {
        throw new Error("Function not implemented.");
      }} />
    </div>
  )
}
