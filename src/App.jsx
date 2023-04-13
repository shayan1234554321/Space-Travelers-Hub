import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import Navbar from './components/Navbar';
import Missions from './pages/missions';
import MyProfile from './pages/myProfile';
import Rockets from './pages/rockets';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  </BrowserRouter>

);

export default App;
