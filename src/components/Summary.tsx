import { Link } from 'react-router-dom';
import style from '../styles/summary.module.css';

const Summary = () => {
    return (
        <div className={style.summary_parent_container} >
            <p className={style.summary_heading}>Finishing up</p>
            <p className={style.summary_details}>Double check everything before confirming</p>

            <div className={style.summary_child_container}>
                <section className={style.user_plan}>
                    <div className={style.plan_child}>
                        <p className={style.plan_heading_container}>Acrade (Monthly)
                            <Link to='/plan' className={style.heading} >Change</Link>
                        </p>

                        <p className={style.plan_heading}>$9/mo</p>
                    </div>
                    <hr />
                    <div className={style.plan_child}>
                        <p className={style.heading}>Online service</p>
                        <p className={style.pricing}>+$1/mo</p>
                    </div>
                    <div className={style.plan_child}>
                        <p className={style.heading}>Larger storage </p>
                        <p className={style.pricing}>+$2/mo</p>
                    </div>

                </section>
                <section className={style.total_container}>
                    <p className={style.heading}>
                        Total (per month)
                    </p>
                    <p className={style.total_pricing}> +$12/mo</p>
                </section>
            </div>

        </div>
    );
};

export default Summary;