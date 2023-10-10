import { useLocation, useNavigate } from 'react-router-dom';
import style from '../styles/navigation.module.css';

interface StepComponentProps {
    userPlan: {
        selectedPlan: string[],
        selectedAddon: number[];
    };
    stepNum: number;
    setStepNum: React.Dispatch<React.SetStateAction<number>>;
    userInfo: {
        name: string,
        email: string,
        telephone: string,
    };
}

const FooterNav = ({ stepNum, setStepNum, userPlan, userInfo }: StepComponentProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Check if a plan has been chosen
    const isPlanChosen: boolean = userPlan.selectedPlan.length > 0;

    // Handle the "Next" button click
    const handleNextBtn = () => {
        setStepNum((prev) => prev + 1);

        // Use a switch statement to navigate based on the current step
        switch (stepNum) {
            case 1:
                navigate('plan'); // Navigate to the 'plan' route
                break;
            case 2:
                navigate('addons'); // Navigate to the 'addons' route
                break;
            case 3:
                navigate('summary'); // Navigate to the 'summary' route
                break;
            case 4:
                navigate('congratulations'); // Navigate to the 'congratulations' route
                break;
            default:
                break;
        }
    };

    // Handle the "Go Back" button click
    const handlePrevBtn = () => {
        setStepNum((prev) => prev - 1);

        // Use navigate(-1) to go back to the previous route
        navigate(-1);
    };


    switch (location.pathname) {
        case '/':
            setStepNum(1);
            break;
        case 'plan':
            setStepNum(2);
            break;
        case 'addons':
            setStepNum(3);
            break;
        case 'summary':
            setStepNum(4);
            break;
        case 'congratulations':
            setStepNum(5);
            break;
        default:
            break;
    }

    // Determine the button style based on the step
    const handleBtnStyle = (stepNo: number, ...args: number[]) => {
        return args.includes(stepNo) ? { display: 'none' } : {};
    };

    return (
        <div className={style.footer_nav_container}>
            {/* "Go Back" button */}
            <button
                style={handleBtnStyle(stepNum, 1, 5)}
                className={style.previous_btn}
                onClick={handlePrevBtn}
            >
                Go Back
            </button>

            {/* "Next Step" or "Confirm" button */}
            <button
                className={style.next_step_btn}
                style={handleBtnStyle(stepNum, 5)}
                onClick={handleNextBtn}
                disabled={(stepNum === 2 && !isPlanChosen)|| (stepNum===1 && (!userInfo.name || !userInfo.email || !userInfo.telephone))}
            >
                {stepNum !== 4 ? 'Next Step' : 'Confirm'}
            </button>
        </div>
    );
};

export default FooterNav;
