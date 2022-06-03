import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import Destination from './views/Destination'
import Crew from './views/Crew'
import Technology from './views/Technology'

function App() {
  return (
    <BrowserRouter>

    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/technology' element={<Technology/>} />
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
