import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pomodoro from './pages/Pomodoro';
import Error from './pages/Error';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="Pomodoro" element={<Pomodoro />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
