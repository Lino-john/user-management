import React, {useState} from 'react'
import AddEditUser from './AddEditUser'
import UserLists from './UserLists'
import UserDetails from './UserDetails';

export default ()=> {
    const [userData, setUser] = useState([]);
    const [mode, setMode] = useState("Add");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [balance, setBalance] = useState("");
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [userId, setUserId] = useState("");
    const API_URL = "https://mysterious-wildwood-52860.herokuapp.com/v1/users?page=1&pageSize=20";
    const loadUserList = async ()=> {
        const response = await fetch(API_URL);
        const users = await response.json();
        const userDataMap =  users.map((user) => {
            return <UserDetails 
                setMode = {setMode}
                key= {user.id}
                id = {user.id}
                firstName = {user.firstName}
                lastName = {user.lastName}
                title = {user.title}
                countryCode = {user.country}
                balance = {user.balance}
                avatar= {user.avatar}
                setUserId = {setUserId} 
                setFirstName = {setFirstName}
                setLastName = {setLastName}
                setBalance = {setBalance}
                setTitle = {setTitle}
                setEmail = {setEmail}
                />
        })
        setUser(userDataMap);
    }
    return (
        <div className="ui container" style={{marginTop:'30px'}}>
            <AddEditUser 
                firstName = {firstName}
                setFirstName = {setFirstName}
                lastName = {lastName}
                setLastName = {setLastName}
                balance = {balance}
                setBalance = {setBalance}
                title = {title}
                setTitle = {setTitle}
                email = {email}
                setEmail = {setEmail}
                mode = {mode}
                setMode = {setMode} 
                userId = {userId}
                loadUserData={loadUserList}/>
            <UserLists setUser = {setUser} userData= {userData} loadUserData={loadUserList} />
        </div>
    )
}
