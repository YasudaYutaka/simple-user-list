import './App.css';
import {useState} from 'react';
import UserForm from './components/form/UserForm';
import UserList from './components/list/UserList';

function App() {

  const [user, setUser] = useState([]);

  const getUserHandler = (userName, userAge) => {
    setUser((prevUsers) => {
      return [...prevUsers, {name: userName, age: userAge, id: Math.random().toString()}];
    });
  }

  return (
    <div className="form">
      <UserForm onGetUser={getUserHandler}/>
      <UserList user={user} />
    </div>
  );
}

export default App;
