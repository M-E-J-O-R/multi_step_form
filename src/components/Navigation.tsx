import style from '../styles/navigation.module.css';
import { Link } from 'react-router-dom';
const Navigation = () => {
    const navData = [
        {
            number: 1,
            navStep: 'STEP 1',
            navDetails: 'YOUR INFO',
        },
        {
            number: 2,
            navStep: 'STEP 2',
            navDetails: 'SELECT PLAN',
        },
        {
            number: 3,
            navStep: 'STEP 3',
            navDetails: 'ADD-ONS',
        },
        {
            number: 4,
            navStep: 'STEP 4',
            navDetails: 'SUMMARY',
        },
    ];
    return (
        <div className={style.navigation_container}>
            {navData.map((nav) =>
                <Link to='/' className={style.nav_child}>
                    <p className={style.nav_num}>{nav.number}</p>
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