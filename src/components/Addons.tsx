import style from '../styles/addon.module.css';
import { useState } from 'react';
const Addons = () => {


    return (
        <div className={style.addons_container}>
            <p className={style.addons_heading}>Pick add-ons</p>
            <p className={style.addons_details}>Add-ons help enhance your gaming experience</p>


            <div className={style.addon_card}>
                <input type="checkbox" />

                <section className={style.addon_info
                }>
                    <p>Online services</p>
                    <p>Access to multiple games</p>
                </section>

                <span>$1/mo</span>
            </div>
        </div>
    );
};

export default Addons;