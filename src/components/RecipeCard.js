import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const { recipe } = props;

    return (
        <div className="recipe">
            <Link to={"/recipe"}  state={ recipe }>
                <img src={recipe.strMealThumb} alt="recipe img" width={100}/>
            </Link>                        
            <Link to={"/recipe"}  state={ recipe }>
                <h4>{recipe.strMeal}</h4>
            </Link>
        </div>
    );
}

export default RecipeCard;