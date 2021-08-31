import styles from './Input.module.css';

const Input = (props) => {
    return (
        <section className={styles['section']}>
            <label htmlFor={props.id} className={styles['section--label']}>{props.label}</label>
            <input id={props.id} value={props.value} type={props.type} className={styles['section--input']} onChange={props.onGetUserData}></input>
        </section>
    );
}

export default Input;