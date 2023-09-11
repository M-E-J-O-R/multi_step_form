import style from '../styles/plan.module.css';
import arcade_logo from '../assets/images/icon-arcade.svg';
import Switch from '@mui/material/Switch';

interface PlanProps {
    checked: boolean,
    handleToggle: () => void;
}

const Plan = ({ checked, handleToggle }: PlanProps) => {

    return (
        <div className={style.plan_container}>
            <p className={style.plan_heading}>Select your plan</p>
            <p className={style.plan_details}>You have option of monthly and yearly billing </p>

            <section className={style.plans_container}>
                <div className={style.plancard} >
                    <img src={arcade_logo} alt="" className={style.plan_icon} />
                    <div>
                        <p className={style.plan_name}>Arcade</p>
                        <p className={style.plan_pricing}>$8/mo</p>
                        <p className={style.plan_bonus}></p>
                    </div>
                </div>
                <div className={style.plancard} >
                    <img src={arcade_logo} alt="" className={style.plan_icon} />
                    <div>
                        <p className={style.plan_name}>Arcade</p>
                        <p className={style.plan_pricing}>$8/mo</p>
                        <p className={style.plan_bonus}></p>
                    </div>
                </div>
                <div className={style.plancard} >
                    <img src={arcade_logo} alt="" className={style.plan_icon} />
                    <div>
                        <p className={style.plan_name}>Arcade</p>
                        <p className={style.plan_pricing}>$8/mo</p>
                        <p className={style.plan_bonus}></p>
                    </div>
                </div>
            </section>
            <section className={style.plan_duration}>
                <span style={{ color: !checked ? 'var(--marine-blue)' : 'var(--cool-gray)' }}>
                    Monthly
                </span>
                <Switch
                    checked={checked}
                    onChange={handleToggle}
                    color="primary"
                />

                <span style={{ color: checked ? 'var(--marine-blue)' : 'var(--cool-gray)' }}>
                    Yearly
                </span>

            </section>


        </div>
    );
};

export default Plan;