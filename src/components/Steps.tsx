import style from '../styles/Steps.module.css';
import StepItem from './StepItem';
import { useState } from 'react';

type StepType = {
    num: string,
    description: string,    
}

const Steps = () => {
    const [stepNo, setStepNo] = useState('1');

    const stepsData:StepType[] = [
        { num: '1', description: 'YOUR INFO' },
        { num: '2', description: 'SELECT PLAN' },
        { num: '3', description: 'ADD-ONS' },
        { num: '4', description: 'SUMMARY' },
    ]

    const handleClick = (num: string) => {
        setStepNo(prev => num);
       };
    return (
        <nav className={style.nav_container} >

            {stepsData.map((step) => (<StepItem
                key={step.num}
                num={step.num}
                description={step.description}
                stepNo={stepNo}
                handleClick={handleClick}               
            />))}
          
        </nav>
    );
};



export default Steps;