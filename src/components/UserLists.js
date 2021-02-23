import React,{useEffect,useState} from 'react'
import './userList.css'
const Userlist = (props)=> {
    useEffect(() => {
        props.loadUserData();
    },[])
    return (
        <div className="user-list">
            <h2 className="formHeader">User details</h2>
            {props.userData}
        </div>
    )
}

export default Userlist
