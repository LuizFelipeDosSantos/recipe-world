import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllRecipes from './features/allRecipes/AllRecipes';
import { Navbar } from './components/Navbar';
import { RecipeDetail } from './components/RecipeDetail';

function App() {
  return (
    <Routes>
    <Route element={<Navbar />}>
      <Route path='/' element={<AllRecipes />} />
      <Route path='/recipe' element={<RecipeDetail />} />
    </Route>
    </Routes>
  );
}

export default App;
