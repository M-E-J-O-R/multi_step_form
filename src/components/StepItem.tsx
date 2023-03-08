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
            color: 'hsl(213, 96%, 18%)',
            backgroundColor: 'hsl(206, 94%,87%)',
            border: 'none'
        } : {

        };
    };


    return (
        <section className={style.step_card}>
            <button
                onClick={() => handleClick(num)}
                className={style.step_no}
                style={handleColorChange()}
            >
                {num}
            </button>

            <section className={style.step_child1}>
                <p>STEP {num}</p>
                <p>{description}</p>
            </section>
        </section>
    );
};


export default StepItem;