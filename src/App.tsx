import HomePage from "./Components/Home/Index";

export default function App() {
  return (
    <div>
      <HomePage id={0} image={""} onScratch={function (id: number): void {
        throw new Error("Function not implemented.");
      }} />
    </div>
  )
}
