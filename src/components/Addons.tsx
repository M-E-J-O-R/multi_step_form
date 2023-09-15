import style from '../styles/addon.module.css';
const Addons = () => {
    return (
        <div className={style.addons_container}>
            <p className={style.addons_heading}>Pick add-ons</p>
            <p className={style.addons_details}>Add-ons help enhance your gaming experience</p>
        </div>
    );
};

export default Addons;