import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Cooking from './components/cooking/Cooking';
import Cocktail from './components/cocktail/Cocktail';
import Modal from './components/Modal'
import New from './components/New/new';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/cooking" element={<Cooking />}></Route>
        <Route path="/cocktail" element={<Cocktail />}></Route>
        <Route path="/new" element={<New />}></Route>
      </Routes>

      <Modal/>
    </div>
  );
}

export default App;
