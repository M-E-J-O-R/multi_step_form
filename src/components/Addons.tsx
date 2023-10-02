import style from '../styles/addon.module.css';
import { useState } from 'react';

interface AddonsProps {
    isChecked: boolean;
}
type addonData =
    {
        id: number,
        addonHeading: string,
        addonInfo: string,
        addonPricing: number;
    };

const Addons = ({ isChecked }: AddonsProps) => {
    const addonData: addonData[] = [
        {
            id: 1,
            addonHeading: 'Online services',
            addonInfo: 'Access to multiple games',
            addonPricing: isChecked ? 10 : 1,
        },
        {
            id: 2,
            addonHeading: 'Large storage',
            addonInfo: 'Extra 1TB of cloud save',
            addonPricing: isChecked ? 20 : 2,
        },
        {
            id: 3,
            addonHeading: 'Customizable profile',
            addonInfo: 'Custom theme on your profile',
            addonPricing: isChecked ? 20 : 2,
        },
    ];
    const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        let isSelected: boolean = e.target.checked;
        let value: number = parseInt(e.target.value);

        if (isSelected) {
            setSelectedAddons([...selectedAddons, value]);
        } else {
            (setSelectedAddons((prevData) => prevData.filter((addon) => addon !== value))
            );
        }

    };




    return (
        <div className={style.addons_parent_container}>
            <p className={style.addons_heading}>Pick add-ons</p>
            <p className={style.addons_details}>Add-ons help enhance your gaming experience</p>

            <div className={style.addon_container}>
                {
                    addonData.map((addon) =>
                        <div key={addon.addonHeading} className={style.addon_card}>
                            <section className={style.addon_info_card}>
                                <input type="checkbox" className={style.addon_checkbox} value={addon.id} checked={selectedAddons.includes(addon.id)} onChange={(e) => handleChecked(e)} />
                                <div className={style.addon_info
                                }>
                                    <p>{addon.addonHeading}</p>
                                    <p>{addon.addonInfo}</p>
                                </div>

                            </section>
                            <span className={style.addon_pricing}>${addon.addonPricing}/mo</span>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Addons;