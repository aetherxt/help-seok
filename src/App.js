import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Today from './pages/Today';
import Important from './pages/Important';
import Pomodoro from './pages/Pomodoro';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Today" element={<Today />} />
        <Route path="Important" element={<Important />} />
        <Route path="Pomodoro" element={<Pomodoro />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
