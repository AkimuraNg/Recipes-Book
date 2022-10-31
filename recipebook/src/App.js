import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Cooking from './components/cooking/Cooking';
import Cocktail from './components/cocktail/Cocktail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/cooking" element={<Cooking />}></Route>
        <Route path="/cocktail" element={<Cocktail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
