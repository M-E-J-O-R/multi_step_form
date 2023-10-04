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

type PlanType = {
  selectedPlan: {
    planName: string,
    planPricing: number,
  },
  selectedAddon: {
    id: number,
    addonHeading: string,
    addonInfo: string,
    addonPricing: number;
  }[];
};

function App() {

  const [stepNum, setStepNum] = useState(1);
  const handleStepNo = (stepNo: number) => {
    setStepNum(stepNo);
  };

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    telephone: '',
  });


  const handleUserInfo = (info: string, value: string) => {
    setUserInfo((prevData) => ({ ...prevData, [info]: value }));
  };

  const [userPlan, setUserPlan] = useState<PlanType>({
    selectedPlan: {
      planName: '',
      planPricing: 0,
    },
    selectedAddon: []
  });
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <div className='App'>
      <div className={style.home_container}>
        <Navigation stepNum={stepNum} handleStepNo={handleStepNo} />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home userInfo={userInfo} handleUserInfo={handleUserInfo} />} />
            <Route path='plan' element={<Plan isChecked={isChecked} handleToggle={handleToggle} userPlan={userPlan} setUserPlan={setUserPlan} />} />
            <Route path='addons' element={<Addons isChecked={isChecked} userPlan={userPlan} setUserPlan={setUserPlan} />} />
            <Route path='summary' element={<Summary />} />
          </Routes>

          <FooterNav stepNum={stepNum} setStepNum={setStepNum} />
        </div>

      </div>




    </div>
  );
}

export default App;
