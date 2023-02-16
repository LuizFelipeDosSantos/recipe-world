import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import AllRecipes from './features/allRecipes/AllRecipes';

function App() {
  return (
    <Routes>
    <Route element={<Navbar />}>
      <Route path='/' element={<AllRecipes />} />
    </Route>
    </Routes>
  );
}

export default App;
