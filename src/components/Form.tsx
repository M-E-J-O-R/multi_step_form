import style from '../styles/Form.module.css';
const Form = () => {

    return (
        <section>
            <p className={style.form_heading}>Personal Info</p>
            <p className={style.form_description}>Please provide your name, email address and phone number.</p>

            <form action="">
                <label htmlFor="name" className={style.input_label}>
                    Name
                    <input type="text" required placeholder="e.g. Stephen King" />
                </label>
                <label htmlFor="email" className={style.input_label}>
                    Email
                    <input type="email" required placeholder="e.g. stephenking@lorem.com" />
                </label>
                <label htmlFor="phoneNum" className={style.input_label}>
                    Phone number
                    <input type="tel" required placeholder="e.g. +1 234 567 890" />
                </label>
            </form>
            <section className={style.button_container}>
                <button>Back</button>
                <button className={style.next_btn}>Next Step</button>
            </section>
           
            
        </section>
    );
};

export default Form;