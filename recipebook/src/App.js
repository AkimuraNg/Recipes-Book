import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cooking from './components/cooking/Cooking';
import Cocktail from './components/cocktail/Cocktail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/cooking" element={<Cooking/>}></Route>
          <Route path="/cocktail" element={<Cocktail/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
