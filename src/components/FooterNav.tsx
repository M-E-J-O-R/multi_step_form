import { Link } from 'react-router-dom';
import style from '../styles/navigation.module.css';
import { useEffect, useState } from 'react';


interface StepComponentProps {
    stepNum: number;
    setStepNum: React.Dispatch<React.SetStateAction<number>>;
}
const FooterNav = ({ stepNum, setStepNum }: StepComponentProps) => {


    const handleNextBtn = () => {
        setStepNum(prev => prev + 1);
        console.log(stepNum);
    };
    const handlePrevBtn = () => {
        setStepNum(prev => prev - 1);
    };
    const handleBtnStyle = () => {
        return stepNum === 1 ? { display: 'none' } : {};
    };
    const [path, setPath] = useState('/');
    useEffect(() => {

        switch (stepNum) {
         
            case 2:
                setPath('plan');
                break;
            case 3:
                setPath('addons');
                break;
            case 4:
                setPath('summary');
                break;
            default:
                setPath('/');

        }
    }, [stepNum]);
    return (
        <div className={style.footer_nav_container}>
            <Link to={path} style={handleBtnStyle()} className={style.previous_btn} onClick={handlePrevBtn}>Go Back</Link>
            <Link to={path} className={style.next_step_btn} onClick={handleNextBtn}>Next Step</Link>
            <p>{path}</p>
            <p>{stepNum}</p>


        </div>
    );
};

export default FooterNav;