import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Navbar />}>

    </Route>
    </Routes>
  );
}

export default App;
