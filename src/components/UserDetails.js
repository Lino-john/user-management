import React from 'react';
import ReactCountryFlag from "react-country-flag";
import countriesQuery from "countries-code"

export default (props) => {
    const formattedBal = () => {
        return (props.balance).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
    }
    const onEditUser = async ()=> {
        props.setMode('Edit');
        const response = await fetch('https://mysterious-wildwood-52860.herokuapp.com/v1/users/'+ props.id);
        const editedUser = await response.json();
        props.setUserId(props.id);
        props.setFirstName(editedUser.firstName);
        props.setLastName(editedUser.lastName);
        props.setBalance(editedUser.balance);
        props.setTitle(editedUser.title);
        props.setEmail(editedUser.email);
    }

    
    return (
        <div className="ui grid userDeatails">
            <div className="three wide column">
                <img className="ui medium circular"
                    src = {props.avatar}
                    alt = {props.avatar} />
            </div>
            <div className="four wide column">
                <span className="boldFont">{props.firstName} {props.lastName}</span> 
                <div>{props.title}</div>
                <div>{countriesQuery.getCountry(props.countryCode)}
                <ReactCountryFlag 
                    countryCode={props.countryCode} 
                    style={{
                        fontSize: '2em',
                        lineHeight: '2em',
                    }} />
                </div>
                
            </div>
            <div className="four wide column">
                <span className="balance">Balance</span> 
                <div className="boldFont">{formattedBal()}</div>
                <div></div>
            </div>
            <div className="four wide column">
                <button onClick={() => onEditUser()} className="ui button">
                    Edit
                </button>
            </div> 
        </div>
        
    )
}
