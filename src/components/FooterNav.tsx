import { Link } from 'react-router-dom';
import style from '../styles/navigation.module.css';


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
    let path = '/';
    switch (stepNum) {
        case 1:
            path = '/';
            break;
        case 2:
            path = 'plan';
            break;
        case 3:
            path = 'addons';
            break;
        case 4:
            path = 'summary';
            break;
        default:
            path = '/';

    }
    return (
        <div className={style.footer_nav_container}>
            <Link to={path} style={handleBtnStyle()} className={style.previous_btn} onClick={() => handlePrevBtn()}>Go Back</Link>
            <Link to={path} className={style.next_step_btn} onClick={() => handleNextBtn()}>Next Step</Link>


        </div>
    );
};

export default FooterNav;