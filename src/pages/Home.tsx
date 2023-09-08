import style from '../styles/home.module.css';
const Home = () => {
    return (
        <div className={style.info_contanier}>
            <div className={style.info_head}>
                <p className={style.step_heading}>Personal info</p>
                <p className={style.step_details}>Please provide your name, email and phone number</p>
            </div>
            <form action="" className={style.form_container}>
                <label htmlFor="name" className={style.label_container}>
                    <p className={style.label_text}>Name</p>
                    <input type="text" id="name" required placeholder='Vannesa Mint' className={style.input_field} />
                </label>
                <label htmlFor="email" className={style.label_container}>
                    <p className={style.label_text}>Email</p>
                    <input type="email" id="email" required placeholder='vannesamint@' className={style.input_field} />
                </label>
                <label htmlFor="phone" className={style.label_container}>
                    <p className={style.label_text}>Phone</p>
                    <input type="tel" id="phone" required placeholder='+1 234 567 890' className={style.input_field} />
                </label>
            </form>

        </div>);
};

export default Home;