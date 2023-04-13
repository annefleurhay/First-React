import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { coffee, tea } from "../utils/data";
const greeting = "Welcome to our cafe!";

export const App = () => {
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
    </div>
  );
};
