import style from '../styles/navigation.module.css';
import { Link, useLocation } from 'react-router-dom';
import { navData } from '../data/navigationData'; // Import the navData array

interface NavigationProps {
    stepNum: number;
    handleStepNo: (stepNo: number) => void;
}

const Navigation = ({ stepNum, handleStepNo }: NavigationProps) => {

    const location = useLocation();
    const currentPath = window.location.href;
    return (
        <div className={style.navigation_container}>
            <>{console.log(currentPath)}</>
            {navData.map((nav) => (
                <Link
                    key={nav.path}
                    to={nav.path}
                    className={style.nav_child}
                    onClick={() => handleStepNo(nav.stepNo)}
                >
                    <p
                        className={`${style.nav_num} ${stepNum === nav.stepNo ? style.active_step : ''
                            }`}
                    >
                        {nav.stepNo}
                    </p>
                    <section>
                        <p className={style.nav_step}>{nav.navStep}</p>
                        <p className={style.nav_details}>{nav.navDetails}</p>
                    </section>
                </Link>
            ))}
        </div>
    );
};

export default Navigation;
