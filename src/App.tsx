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

import pro_logo from './assets/images/icon-pro.svg';
import advanced_logo from './assets/images/icon-advanced.svg';
import arcade_logo from './assets/images/icon-arcade.svg';

type PlanType = {
  selectedPlan: string[],
  selectedAddon: number[];
};

interface PlanData {
  planName: string,
  planLogo: typeof pro_logo,
  planPricing: number,
  planBonus: string,
}


interface AddonData {
  id: number,
  addonHeading: string,
  addonInfo: string,
  addonPricing: number;
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
    selectedPlan: [],
    selectedAddon: []
  });


  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  const planData: PlanData[] = [
    {
      planName: 'Acrade',
      planLogo: arcade_logo,
      planPricing: isChecked ? 90 : 9,
      planBonus: '2 months free',
    },
    {
      planName: 'Advanced',
      planLogo: advanced_logo,
      planPricing: isChecked ? 120 : 12,
      planBonus: '2 months free',
    },
    {
      planName: 'Pro',
      planLogo: pro_logo,
      planPricing: isChecked ? 150 : 15,
      planBonus: '2 months free',
    },
  ];
  const addonData: AddonData[] = [
    {
      id: 1,
      addonHeading: 'Online services',
      addonInfo: 'Access to multiple games',
      addonPricing: isChecked ? 10 : 1,
    },
    {
      id: 2,
      addonHeading: 'Large storage',
      addonInfo: 'Extra 1TB of cloud save',
      addonPricing: isChecked ? 20 : 2,
    },
    {
      id: 3,
      addonHeading: 'Customizable profile',
      addonInfo: 'Custom theme on your profile',
      addonPricing: isChecked ? 20 : 2,
    },
  ];

  return (
    <div className='App'>
      <div className={style.home_container}>
        <Navigation stepNum={stepNum} handleStepNo={handleStepNo} />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home userInfo={userInfo} handleUserInfo={handleUserInfo} />} />

            <Route path='plan' element={<Plan isChecked={isChecked} handleToggle={handleToggle} userPlan={userPlan} setUserPlan={setUserPlan} planData={planData} />} />

            <Route path='addons' element={<Addons isChecked={isChecked} userPlan={userPlan} setUserPlan={setUserPlan} addonData={addonData} />} />

            <Route path='summary' element={<Summary isChecked={isChecked} userPlan={userPlan} addonData={addonData} planData={planData} />} />

            <Route path='congratulations' element={<Congratulations />} />
          </Routes>

          <FooterNav stepNum={stepNum} setStepNum={setStepNum} userPlan= {userPlan} />
        </div>

      </div>




    </div>
  );
}

export default App;
