import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomeScreen from './components/home';
import Map from './components/map';

console.log('Current environment:', process.env.NODE_ENV);

function App() {
  return (
    <BrowserRouter basename='/TechNav'>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
