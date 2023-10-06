import { Link, useNavigate } from 'react-router-dom';
import style from '../styles/navigation.module.css';



interface StepComponentProps {
    stepNum: number;
    setStepNum: React.Dispatch<React.SetStateAction<number>>;
}
const FooterNav = ({ stepNum, setStepNum }: StepComponentProps) => {

    const navigate = useNavigate();

    let path = '/';
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
    // const pathChanger = () => {
    //     if (stepNum === 1) {
    //         return '/';
    //     } else if (stepNum === 2) {
    //         return 'plan';
    //     } else if (stepNum === 3) {
    //         return 'addons';
    //     } else if (stepNum === 4) {
    //         return 'summary';
    //     } else {
    //         return '/';
    //     }
    // };



    // const [path, setPath] = useState('/');
    // useEffect(() => {

    //     switch (stepNum) {

    //         case 1:
    //             setPath('/');
    //             break;
    //         case 2:
    //             setPath('plan');
    //             break;
    //         case 3:
    //             setPath('addons');
    //             break;
    //         case 4:
    //             setPath('summary');
    //             break;
    //         default:
    //             break
    //     }
    // }, [stepNum]);
    return (
        <div className={style.footer_nav_container}>
            <button style={handleBtnStyle()} className={style.previous_btn} onClick={handlePrevBtn}>Go Back</button>

            <button className={style.next_step_btn} onClick={handleNextBtn}>Next Step</button>

        </div>
    );
};

export default FooterNav;