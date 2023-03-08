import { useState } from 'react';
import style from '../styles/Steps.module.css';





const StepItem = ({ num, description }: { num: string, description: string; }) => {
    const [stepNo, setStepNo] = useState('1');

    const handleClick = (num: string) => {
        setStepNo(prev => num);
        console.log(stepNo);
        console.log(handleColorChange());
    };
    const handleColorChange = () => {
        return num === stepNo ? {
            color: 'black',
            backgroundColor: 'blue',
            border: 'none'
        } : {
            color: 'yellow'
        };
    };


    return (
        <section className={style.step_card}>
            <button onClick={() => handleClick(num)} className={style.step_no}>{num}</button>
            <section className={style.step_child1}>
                <p>STEP {num}</p>
                <p>{description}</p>
                <p>{stepNo}</p>
            </section>
        </section>
    );
};


export default StepItem;