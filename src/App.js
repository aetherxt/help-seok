import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Today from './pages/Today';
import Important from './pages/Important';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Today" element={<Today />} />
        <Route path="Important" element={<Important />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
