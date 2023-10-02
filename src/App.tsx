import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import style from './styles/home.module.css';
import FooterNav from './components/FooterNav';
import { useState } from 'react';
import Plan from './components/Plan';
import Addons from './components/Addons';
import Summary from './components/Summary';
import Congratulations from './components/Congratulations';


function App() {
  const [stepNum, setStepNum] = useState(1);
  const handleStepNo = (stepNo: number) => {
    setStepNum(stepNo);
  };

  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <div className='App'>
      <div className={style.home_container}>
        <Navigation stepNum={stepNum} handleStepNo={handleStepNo} />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='plan' element={<Plan checked={checked} handleToggle={handleToggle} />} />
            <Route path='addons' element={<Addons />} />
            <Route path='summary' element={<Congratulations/>} />
          </Routes>

          <FooterNav stepNum={stepNum} setStepNum={setStepNum} />
        </div>

      </div>




    </div>
  );
}

export default App;
