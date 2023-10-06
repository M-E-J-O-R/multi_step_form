import style from '../styles/plan.module.css';
import arcade_logo from '../assets/images/icon-arcade.svg';
import Switch from '@mui/material/Switch';
import pro_logo from '../assets/images/icon-pro.svg';
import advanced_logo from '../assets/images/icon-advanced.svg';
import React, { useEffect, useState } from 'react';

interface UserPlanProps {
    isChecked: boolean,
    handleToggle: () => void;
    userPlan: {
        selectedPlan: string[],
        selectedAddon: number[];
    };
    setUserPlan: React.Dispatch<React.SetStateAction<{
        selectedPlan:string[],
        selectedAddon: number[];
    }>>;
}
interface PlanData {
    planName: string,
    planLogo: typeof pro_logo,
    planPricing: number,
    planBonus: string,
}

const Plan = ({ isChecked, handleToggle, userPlan, setUserPlan }: UserPlanProps) => {

    const planStyle = (plan: string) => {
        if (userPlan.selectedPlan?.planName === plan) {
            return {
                border: '1px solid var(--purplish-blue)',
                backgroundColor: 'var(--magnolia)',
            };
        } else {
            return {};
        }

    };

    const handleSelectedPlan = (plan: PlanData) => {
        setUserPlan((prevUserPlan) => ({
            ...prevUserPlan,
            selectedPlan: plan
            // planName: plan.planName,
            // planPricing: plan.planPricing

        }));

    };


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
                    <div
                        className={style.plancard}
                        style={planStyle(plan.planName)}
                        key={plan.planName} onClick={() => handleSelectedPlan(plan)} >


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
                    Year

                </span>

                <>{console.log(userPlan.selectedPlan.planPricing, 'kkkkkkk')}</>
                <>{ console.log(planData[0].planPricing)}</>


            </section>


        </div>
    );
};

export default Plan;