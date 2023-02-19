import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectRecipe } from "./recipeSlice";
import { loadRecipe } from "./recipeSlice";

const Recipe = () => {
    const idMeal = useLocation().state.idMeal;
    const recipe = useSelector(selectRecipe);
    const { isLoading } = useSelector((state) => state.recipe);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRecipe(idMeal));
    }, [dispatch, idMeal]);

    return (
        <>
        { isLoading ? 
            <h1>
                Loading recipe...
            </h1>
            :
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
        }
        </>
    );
}

export default Recipe;