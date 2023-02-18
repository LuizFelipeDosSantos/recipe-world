import { useLocation } from "react-router-dom";

export function Recipe() {
    const recipe = useLocation().state;

    return (
        <div className="recipe">
            <img src={recipe.strMealThumb} alt="recipe img" width={200}/>
            <ul>
                <li>
                    <h2>{recipe.strMeal}</h2>
                </li>
                <li>
                    <h4>{recipe.strCategory}</h4>
                </li>
                <li>
                    <h4>{recipe.strArea}</h4>
                </li>
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>{recipe.strInstructions}</p>
        </div>
    );
}