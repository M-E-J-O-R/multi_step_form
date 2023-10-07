import style from '../styles/congratulation.module.css';
import congratulationIcon from '../assets/images/icon-thank-you.svg';

const Congratulations = () => {

    return (
        <div className={style.congratulations_container}>
            <img src={congratulationIcon} alt="" />
            <p className={style.con_heading} >Thank you!</p>
            <p className={style.congratulations_message}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>

        </div>
    );
};

export default Congratulations;