import { Link } from 'react-router-dom';
import style from '../styles/summary.module.css';


type SummaryProps = {
    isChecked: boolean,
    addonData: {
        id: number,
        addonHeading: string,
        addonInfo: string,
        addonPricing: number;
    }[];

    userPlan: {
        selectedPlan: {
            planName: string,
            planPricing: number,
        },
        selectedAddon: number[];
    };

};


const Summary = ({ userPlan, isChecked, addonData }: SummaryProps) => {
    let userSelectedAddon = addonData.filter((addons) => userPlan.selectedAddon.includes(addons.id));

    const totalPrice = () => {
        let planPrice = userPlan.selectedPlan.planPricing;
        let totalPrice = userPlan.selectedAddon.reduce((totalPrice, addonId) => {
            const addon = addonData.find((addon) => addon.id === addonId);
            if (addon) {
                return totalPrice + addon.addonPricing;
            }
            return totalPrice;
        }, 0);

        return planPrice + totalPrice;
    };



    return (
        <div className={style.summary_parent_container} >
            <p className={style.summary_heading}>Finishing up</p>
            <p className={style.summary_details}>Double check everything before confirming</p>

            <div className={style.summary_child_container}>
                <section className={style.user_plan}>
                    <div className={style.plan_child}>
                        <p className={style.plan_heading_container}>{userPlan.selectedPlan?.planName} ({isChecked ? 'yearly' : 'monthly'})
                            <Link to='/plan' className={style.heading} >Change</Link>
                        </p>

                        <p className={style.plan_heading}>${userPlan.selectedPlan?.planPricing}/{isChecked ? 'yr' : 'mo'}</p>
                    </div>
                    <hr />
                    {userSelectedAddon.map((addon) =>

                        <div className={style.plan_child} key={addon.id}>
                            <p className={style.heading}>{addon.addonHeading}</p>
                            <p className={style.pricing}>+${addon.addonPricing}/{isChecked ? 'yr' : 'mo'}</p>
                        </div>
                    )}


                </section>
                <section className={style.total_container}>
                    <p className={style.heading}>
                        Total (per {isChecked ? 'year' : 'month'})
                    </p>
                    <p className={style.total_pricing}> +${totalPrice()}/{isChecked ? 'yr' : 'mo'}</p>
                </section>
            </div>

        </div>
    );
};

export default Summary;