import {useState} from 'react';
import Input from './Input';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState('');

    const getUserNameHandler = (name) => {
        setUserName(name.target.value);
    }

    const getUserAgeHandler = (age) => {
        setUserAge(age.target.value);
    }

    const submitUserDataHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values).'});
            return;
        }
        if(+userAge < 1) {
            setError({title: 'Invalid age', message: 'Please enter a valid age (> 0).'});
            return;
        }
        props.onGetUser(userName, userAge);
        setUserName('');
        setUserAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card>
                <form onSubmit={submitUserDataHandler}>
                    <Input label="Username" value={userName} type="text" id="username" onGetUserData={getUserNameHandler}/>
                    <Input label="Age (Years)" value={userAge} type="number" id="age" onGetUserData={getUserAgeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default UserForm;