import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Navigation from './components/Navigation';
import style from './styles/home.module.css';


function App() {
  return (
    <div className='App'>
      <div className={style.home_container}>
        <Navigation />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='addons' element={<Home />} />
          <Route path='summary' element={<Home />} />
        </Routes>
      </div>




    </div>
  );
}

export default App;
