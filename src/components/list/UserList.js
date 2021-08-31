import UserItem from './UserItem';
import Card from '../UI/Card';

const UserList = (props) => {
    return (
        <Card>
            <ul>
                {props.user.map(user => (
                    <UserItem name={user.name} age={user.age} key={user.id}/>
                ))}
            </ul>
        </Card>
    );
}

export default UserList;