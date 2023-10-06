import style from '../styles/addon.module.css';

interface AddonsProps {
    isChecked: boolean;
    addonData: {
        id: number,
        addonHeading: string,
        addonInfo: string,
        addonPricing: number;
    }[];
    userPlan: {
        selectedPlan: string[],
        selectedAddon: number[];
    };
    setUserPlan: React.Dispatch<React.SetStateAction<{
        selectedPlan: string[],
        selectedAddon: number[];
    }>>;
}


const Addons = ({ isChecked, userPlan, setUserPlan, addonData }: AddonsProps) => {
    
    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        let isSelected: boolean = e.target.checked;
        let value: number = parseInt(e.target.value);

        if (isSelected) {
            setUserPlan((prevUserPlan) => ({
                ...prevUserPlan,
                selectedAddon: [...prevUserPlan.selectedAddon, value]
            }));
        } else {

            setUserPlan((prevUserPlan) => ({
                ...prevUserPlan,
                selectedAddon: prevUserPlan.selectedAddon.filter((addon) => addon !== value)
            }));

        }

    };
    const addonStyle = (plan: number) => {
        if (userPlan.selectedAddon.includes(plan)) {
            return {
                border: '1px solid var(--purplish-blue)',
                backgroundColor: 'var(--magnolia)',
            };
        }
    };



    return (
        <div className={style.addons_parent_container}>
            <p className={style.addons_heading}>Pick add-ons</p>
            <p className={style.addons_details}>Add-ons help enhance your gaming experience</p>

            <div className={style.addon_container}>
                {
                    addonData.map((addon) =>
                        <div
                            key={addon.addonHeading}
                            className={style.addon_card}
                            style={addonStyle(addon.id)}
                        >


                            <section className={style.addon_info_card}>
                                <input type="checkbox"
                                    className={style.addon_checkbox}
                                    value={addon.id}
                                    checked={userPlan.selectedAddon.includes(addon.id)}
                                    onChange={(e) => handleChecked(e)} />

                                <div className={style.addon_info}>
                                    <p>{addon.addonHeading}</p>
                                    <p>{addon.addonInfo}</p>
                                </div>

                            </section>
                            <span className={style.addon_pricing}>${addon.addonPricing}/{isChecked ? 'yr' : 'mo'}</span>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Addons;