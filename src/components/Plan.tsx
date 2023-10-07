import style from '../styles/plan.module.css';
import Switch from '@mui/material/Switch';
import pro_logo from '../assets/images/icon-pro.svg';

// Define props interface for Plan component
interface UserPlanProps {
    isChecked: boolean,
    planData: {
        planName: string,
        planLogo: typeof pro_logo,
        planPricing: number,
        planBonus: string,
    }[];
    handleToggle: () => void;
    userPlan: {
        selectedPlan: string[],
        selectedAddon: number[];
    };
    setUserPlan: React.Dispatch<React.SetStateAction<{
        selectedPlan: string[],
        selectedAddon: number[];
    }>>;
}
interface PlanData {
    planName: string,
    planLogo: typeof pro_logo,
    planPricing: number,
    planBonus: string,
}

const Plan = ({ isChecked, handleToggle, userPlan, setUserPlan, planData }: UserPlanProps) => {
    // Define the style for the selected plan
    const planStyle = (plan: string) => {
        if (userPlan.selectedPlan?.[0] === plan) {
            return {
                border: '1px solid var(--purplish-blue)',
                backgroundColor: 'var(--magnolia)',
            };
        } else {
            return {};
        }
    };

    // Handle the selection of a plan
    const handleSelectedPlan = (plan: PlanData) => {
        setUserPlan((prevUserPlan) => ({
            ...prevUserPlan,
            selectedPlan: [plan.planName]
        }));
    };

    return (
        <div className={style.plan_container}>
            <p className={style.plan_heading}>Select your plan</p>
            <p className={style.plan_details}>You have the option of monthly and yearly billing</p>

            <section className={style.plans_container}>
                {planData.map((plan) =>
                    <div
                        className={style.plancard}
                        style={planStyle(plan.planName)}
                        key={plan.planName}
                        onClick={() => handleSelectedPlan(plan)}
                    >
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
            </section>
        </div>
    );
};

export default Plan;
