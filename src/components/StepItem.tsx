import style from '../styles/Steps.module.css';

type StepItemType = {
    num: string,
    description: string,
    stepNo: string,
    handleClick: (num: string) => void;
};



const StepItem = ({ num, description, stepNo, handleClick }: StepItemType) => {

    const handleColorChange = () => {
        return num === stepNo ? {
            color: 'black',
            backgroundColor: 'blue',
            border: 'none'
        } : {
            color: 'yellow'
        };
    };


    return (
        <section className={style.step_card}>
            <button onClick={() => handleClick(num)} className={style.step_no} style={handleColorChange()}>{num}
            </button>
            
            <section className={style.step_child1}>
                <p>STEP {num}</p>
                <p>{description}</p>
                <p>{stepNo}</p>
            </section>
        </section>
    );
};


export default StepItem;