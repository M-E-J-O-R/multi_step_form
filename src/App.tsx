import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import style from './styles/home.module.css';
import FooterNav from './components/FooterNav';
import { useState } from 'react';


function App() {
  const [stepNum, setStepNum] = useState(1);
  const handleStepNo = (stepNo: number) => {
    setStepNum(stepNo);
  };
  return (
    <div className='App'>
      <div className={style.home_container}>
        <Navigation stepNum={stepNum} handleStepNo={handleStepNo} />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='addons' element={<Home />} />
            <Route path='summary' element={<Home />} />
          </Routes>

          <FooterNav stepNum={stepNum} setStepNum={setStepNum} />
        </div>

      </div>




    </div>
  );
}

export default App;
