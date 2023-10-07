import { useNavigate } from 'react-router-dom';
import style from '../styles/navigation.module.css';



interface StepComponentProps {
    userPlan: {
        selectedPlan: string[],
        selectedAddon: number[];
    };
    stepNum: number;
    setStepNum: React.Dispatch<React.SetStateAction<number>>;
}
const FooterNav = ({ stepNum, setStepNum, userPlan }: StepComponentProps) => {

    const navigate = useNavigate();
    const isPlanChosen: boolean = userPlan.selectedPlan.length > 0;
    const handleNextBtn = () => {
        setStepNum(prev => prev + 1);
        if (stepNum === 1) {
            navigate('plan');
        } else if (stepNum === 2) {
            navigate('addons');
        } else if (stepNum === 3) {
            navigate('summary');
        } else if (stepNum === 4) {
            navigate('congratulations');
        }

    };
    const handlePrevBtn = () => {
        setStepNum(prev => prev - 1);
        navigate(-1);
    };
    const handleBtnStyle = () => {
        return stepNum === 1 ? { display: 'none' } : {};
    };

    return (
        <div className={style.footer_nav_container}>
            <button style={handleBtnStyle()} className={style.previous_btn} onClick={handlePrevBtn}>Go Back</button>

            <button className={style.next_step_btn} onClick={handleNextBtn} disabled={stepNum === 2 && !isPlanChosen}>
                {stepNum !== 4 ? 'Next Step' : 'Confirm'}
            </button>

        </div>
    );
};

export default FooterNav;