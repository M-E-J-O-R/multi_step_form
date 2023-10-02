import style from '../styles/plan.module.css';
import arcade_logo from '../assets/images/icon-arcade.svg';
import Switch from '@mui/material/Switch';
import pro_logo from '../assets/images/icon-pro.svg';
import advanced_logo from '../assets/images/icon-advanced.svg';
import { useState } from 'react';

interface PlanProps {
    isChecked: boolean,
    handleToggle: () => void;
}
interface PlanData {
    planName: string,
    planLogo: typeof pro_logo,
    planPricing: number,
    planBonus: string,
}

const Plan = ({ isChecked, handleToggle }: PlanProps) => {
    const planData: PlanData[] = [
        {
            planName: 'Acrade',
            planLogo: arcade_logo,
            planPricing: isChecked ? 90 : 9,
            planBonus: '2 months free',
        },
        {
            planName: 'Advanced',
            planLogo: advanced_logo,
            planPricing: isChecked ? 120 : 12,
            planBonus: '2 months free',
        },
        {
            planName: 'Pro',
            planLogo: pro_logo,
            planPricing: isChecked ? 150 : 15,
            planBonus: '2 months free',
        },
    ];
    return (
        <div className={style.plan_container}>
            <p className={style.plan_heading}>Select your plan</p>
            <p className={style.plan_details}>You have option of monthly and yearly billing </p>

            <section className={style.plans_container}>
                {planData.map((plan) =>
                    <div className={style.plancard} key={plan.planName}>
                        <img src={plan.planLogo} alt="" className={style.plan_icon} />
                        <div>
                            <p className={style.plan_name}>{plan.planName}</p>
                            <p className={style.plan_pricing}>${plan.planPricing}/mo</p>
                            <p className={style.plan_bonus}> {isChecked ? plan.planBonus : ''}</p>
                        </div>
                    </div>


                )}



            </section>
            <section className={style.plan_duration}>
                <span style={{ color: !isChecked ? 'var(--marine-blue)' : 'var(--cool-gray)' }}>
                    Monthly
                </span>
                <Switch
                    checked={isChecked}
                    onChange={handleToggle}
                    color="primary"
                />

                <span style={{ color: isChecked ? 'var(--marine-blue)' : 'var(--cool-gray)' }}>
                    Yearly
                </span>

            </section>


        </div>
    );
};

export default Plan;