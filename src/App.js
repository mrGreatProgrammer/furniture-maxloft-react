import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import PopUp from './Pages/PopUp/PopUp';
import ErrorNF from './Pages/ErrorNF/ErrorNF';
import FurnitureCatalog from './Pages/FurnitureCatalog/FurnitureCatalog';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/popup' element={<PopUp />} />
          <Route path='/furniture' element={<FurnitureCatalog />} />
          <Route path='*' element={<ErrorNF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
