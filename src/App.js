import GameList from "./components/GameList";
import "./App.css";

function App() {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="font-bold text-3xl text-center text-white">
                Path Products
            </h1>
            <GameList />
        </div>
    );
}

export default App;
