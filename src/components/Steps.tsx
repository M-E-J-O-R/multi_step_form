import style from '../styles/Steps.module.css';
import StepItem from './StepItem';
import { useState } from 'react';



const Steps = () => {
    const [stepNo, setStepNo] = useState('1');

    const handleClick = (num: string) => {
        setStepNo(prev => num);
        console.log(stepNo);
    };
    return (
        <nav className={style.nav_container} >
            <StepItem num='1' description='YOUR INFO' stepNo={stepNo} handleClick={handleClick} />
            <StepItem num='2' description='SELECT PLAN' stepNo={stepNo} handleClick={handleClick} />
            <StepItem num='3' description='ADD-ONS' stepNo={stepNo} handleClick={handleClick} />
            <StepItem num='4' description='SUMMARY' stepNo={stepNo} handleClick={handleClick} />
        </nav>
    );
};



export default Steps;