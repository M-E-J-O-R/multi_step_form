import style from '../styles/addon.module.css';
import { useState } from 'react';


type addonData =
    {
        addonHeading: string,
        addonInfo: string,
        addonPricing: number;
    };

const Addons = () => {
    const addonData: addonData[] = [
        {
            addonHeading: 'Online services',
            addonInfo: 'Access to multiple games',
            addonPricing: 1,
        },
        {
            addonHeading: 'Large storage',
            addonInfo: 'Extra 1TB of cloud save',
            addonPricing: 2,
        },
        {
            addonHeading: 'Customizable profile',
            addonInfo: 'Custom theme on your profile',
            addonPricing: 2,
        },
    ];

    return (
        <div className={style.addons_parent_container}>
            <p className={style.addons_heading}>Pick add-ons</p>
            <p className={style.addons_details}>Add-ons help enhance your gaming experience</p>

            <div className={style.addon_container}>
                {
                    addonData.map((addon) =>
                        <div key={addon.addonHeading} className={style.addon_card}>
                            <section className={style.addon_info_card}>
                                <input type="checkbox" className={style.addon_checkbox} />
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