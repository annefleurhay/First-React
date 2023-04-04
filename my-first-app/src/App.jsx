import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
const greeting =
  "Welkom Annefleur, ik ben trots op je met wat je allemaal aan het doen bent";
const description = <p>This app is going to change your life.</p>;
const test = "git test";

export const App = () => {
  return (
    <div className="App">
      <DrinkButtons />
      <h1>{greeting}</h1>
      <p>Hoihoi! Hier is je eerste app</p>
      {description}
      {test}
    </div>
  );
};
