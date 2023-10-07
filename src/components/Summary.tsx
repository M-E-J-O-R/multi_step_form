import { Link } from 'react-router-dom';
import style from '../styles/summary.module.css';

type SummaryProps = {
    isChecked: boolean;
    addonData: {
        id: number;
        addonHeading: string;
        addonInfo: string;
        addonPricing: number;
    }[];
    planData: {
        planName: string;
        planLogo: string;
        planPricing: number;
        planBonus: string;
    }[];
    userPlan: {
        selectedPlan: string[];
        selectedAddon: number[];
    };
};

const Summary = ({ userPlan, isChecked, addonData, planData }: SummaryProps) => {
    // Filter user-selected addons and plans
    const userSelectedAddon = addonData.filter((addon) =>
        userPlan.selectedAddon.includes(addon.id)
    );
    const userSelectedPlan = planData.find((plan) =>
        userPlan.selectedPlan.includes(plan.planName)
    );

    // Calculate the total price
    const calculateTotalPrice = () => {
        const planPrice = userSelectedPlan?.planPricing || 0;
        const addonPrices = userSelectedAddon.reduce(
            (total, addon) => total + addon.addonPricing,
            0
        );
        return planPrice + addonPrices;
    };

    return (
        <div className={style.summary_parent_container}>
            {/* Summary heading and details */}
            <p className={style.summary_heading}>Finishing up</p>
            <p className={style.summary_details}>
                Double-check everything before confirming
            </p>

            {/* User plan and selected addons */}
            <div className={style.summary_child_container}>
                <section className={style.user_plan}>
                    {/* User-selected plan */}
                    <div className={style.plan_child}>
                        <p className={style.plan_heading_container}>
                            {userSelectedPlan?.planName} ({isChecked ? 'yearly' : 'monthly'}){' '}
                            <Link to='/plan' className={style.heading}>
                                Change
                            </Link>
                        </p>
                        <p className={style.plan_heading}>
                            ${userSelectedPlan?.planPricing}/{isChecked ? 'yr' : 'mo'}
                        </p>
                    </div>
                    <hr />

                    {/* User-selected addons */}
                    {userSelectedAddon.map((addon) => (
                        <div className={style.plan_child} key={addon.id}>
                            <p className={style.heading}>{addon.addonHeading}</p>
                            <p className={style.pricing}>
                                +${addon.addonPricing}/{isChecked ? 'yr' : 'mo'}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Total price */}
                <section className={style.total_container}>
                    <p className={style.heading}>
                        Total (per {isChecked ? 'year' : 'month'})
                    </p>
                    <p className={style.total_pricing}>
                        +${calculateTotalPrice()}/{isChecked ? 'yr' : 'mo'}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Summary;
