const greeting = "Wat wil je drinken? Koffie of thee?";
import "../components/DrinkButtons.css";

export const DrinkButtons = () => {
  return (
    <>
      <h1>{greeting}</h1>
      <div className="button-group">
        <button className="button">Thee</button>
        <button className="button">Koffie</button>
      </div>
    </>
  );
};
