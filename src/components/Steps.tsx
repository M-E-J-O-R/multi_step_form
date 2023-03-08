import style from '../styles/Steps.module.css';
import StepItem from './StepItem';
import img from '../assets/images/bg-sidebar-desktop.svg';


const Steps = () => {
    return (
        <nav className={style.nav_container} >
            <StepItem num='1' description='YOUR INFO' />
            <StepItem num='2' description='SELECT PLAN' />
            <StepItem num='3' description='ADD-ONS' />
            <StepItem num='4' description='SUMMARY' />
        </nav>
    );
};



export default Steps;