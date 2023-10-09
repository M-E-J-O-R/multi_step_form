import style from '../styles/navigation.module.css';
import { navData } from '../data/navigationData'; // Import the navData array

interface NavigationProps {
    stepNum: number;
}

const Navigation = ({ stepNum }: NavigationProps) => {
    return (
        <div className={style.navigation_container}>

            {navData.map((nav) => (
                <p className={style.nav_child}>
                    <p
                        className={`${style.nav_num}
                         ${stepNum === nav.stepNo ? style.active_step : ''
                            }`}
                    >
                        {nav.stepNo}
                    </p>
                    <section>
                        <p className={style.nav_step}>{nav.navStep}</p>
                        <p className={style.nav_details}>{nav.navDetails}</p>
                    </section>
                </p>
            ))}
        </div>
    );
};

export default Navigation;
