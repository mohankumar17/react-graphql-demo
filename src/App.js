import "./App.css";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Mutation from "./pages/Mutation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList></CharactersList>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/:id" element={<Character></Character>}></Route>
        <Route path="/add" element={<Mutation></Mutation>}></Route>
      </Routes>
    </div>
  );
}

export default App;
