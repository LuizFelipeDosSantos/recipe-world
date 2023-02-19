import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import AllRecipes from './features/allRecipes/AllRecipes';
import Recipe from './features/recipe/Recipe';
import RecipesByCategory from './features/recipesByCategory/RecipesByCategory';

function App() {
  return (
    <Routes>
    <Route element={<Navbar />}>
      <Route path='/' element={<AllRecipes />} />
      <Route path='/recipe' element={<Recipe />} />
      <Route path='/beef' element={<RecipesByCategory category='Beef'/>}/>
      <Route path='/chicken' element={<RecipesByCategory category='Chicken'/>}/>
      <Route path='/seafood' element={<RecipesByCategory category='Seafood'/>}/>
      <Route path='/vegetarian' element={<RecipesByCategory category='Vegetarian'/>}/>
    </Route>
    </Routes>
  );
}

export default App;
