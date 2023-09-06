import { useState } from 'react';
import style from '../styles/navigation.module.css';
import { Link } from 'react-router-dom';




interface NavItem {
    stepNo: number;
    navStep: string;
    navDetails: string;
}

const Navigation = () => {
    const [stepNum, setStepNum] = useState(1);
    const handleStepNo = (stepNo: number) => {
        setStepNum(prev => stepNo);
    };

    const navData: NavItem[] = [
        {
            stepNo: 1,
            navStep: 'STEP 1',
            navDetails: 'YOUR INFO',
        },
        {
            stepNo: 2,
            navStep: 'STEP 2',
            navDetails: 'SELECT PLAN',
        },
        {
            stepNo: 3,
            navStep: 'STEP 3',
            navDetails: 'ADD-ONS',
        },
        {
            stepNo: 4,
            navStep: 'STEP 4',
            navDetails: 'SUMMARY',
        },
    ];
    return (
        <div className={style.navigation_container}>
            {navData.map((nav) =>
                <Link to='/' className={style.nav_child} onClick={() => handleStepNo(nav.stepNo)}>
                    <p className={`${style.nav_num} ${stepNum === nav.stepNo && `${style.active_step}`}`}>{nav.stepNo}</p>
                    <section>
                        <p className={style.nav_step}>{nav.navStep}</p>
                        <p className={style.nav_details}>{nav.navDetails}</p>
                    </section>
                </Link>
            )}

        </div>
    );
};



export default Navigation;