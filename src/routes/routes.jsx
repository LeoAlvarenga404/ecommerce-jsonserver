import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Competition } from '../pages/Competition'
import { Endurance } from '../pages/Endurance'
import { Supercharged } from '../pages/Supercharged'

export function App(){
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/supercharged" element={<Supercharged />} />
        <Route path="/endurance" element={<Endurance />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </Router>
  );
}