import "../components/DrinkButtons.css";
import { Button } from "./UI/Button";

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h1>
        Would you like {drinkOne} or {drinkTwo}?
      </h1>
      <div className="button-group">
        <Button text={drinkOne} />
        <Button text={drinkTwo} />
      </div>
    </>
  );
};
