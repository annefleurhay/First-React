const greeting = "Wat wil je drinken? Koffie of thee?";
import "../components/DrinkButtons.css";

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <div className="button-group">
        <button className="button">{drinkOne}</button>
        <button className="button">{drinkTwo}</button>
      </div>
    </>
  );
};
