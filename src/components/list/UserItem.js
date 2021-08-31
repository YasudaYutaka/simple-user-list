import styles from './UserItem.module.css';

const UserItem = (props) => {
    return (
        <li className={styles.section}>
            <span className={styles['section-span']}>{props.name}</span>, {props.age} years old
        </li>
    );
}

export default UserItem;