import React, {useState}  from 'react'
export default (props) => {
    const onFirstNameChange = (event)=> {
        props.setFirstName(event.target.value);
    }
    const onLastNameChange = (event)=> {
        props.setLastName(event.target.value);
    }
    const onBalanceChange = (event)=> {
        props.setBalance(event.target.value);
    }
    const onTitleChange = (event)=> {
        props.setTitle(event.target.value);
    }
    const onEmailChange = (event)=> {
        props.setEmail(event.target.value);
    }

    const onFormSubmit = async (event)=> {
        let formData = {
            email: props.email,
            firstName : props.firstName.trim(),
            lastName : props.lastName,
            country: "US",
            balance : Number(props.balance),
            title: props.title
        }; 
        console.warn("Mode",props.mode);
        if (props.mode == "Add") {
            fetch('https://mysterious-wildwood-52860.herokuapp.com/v1/users', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(formData)
            }).then(function(response) {
                props.loadUserData();
                onCancelForm();
            });
        } else {
            fetch('https://mysterious-wildwood-52860.herokuapp.com/v1/users/'+ props.userId, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8'
                  },
                body: JSON.stringify(formData)
            }).then(function(response) {
                props.loadUserData();
            });
        }
        
    }
    const onCancelForm = () => {
        props.setFirstName("");
        props.setLastName("");
        props.setBalance("");
        props.setTitle("");
        props.setEmail("");
        props.setMode('Add');
    }
    return (
        <div className="ui form add-user">
            <h2 className="formHeader">{props.mode} User</h2>
            <div className="field">
                <label>First Name</label>
                <input className="input" value={props.firstName} onChange={(event)=> onFirstNameChange(event)}/>
            </div>
            <div className="field">
                <label>Last Name</label>
                <input className="input" value={props.lastName} onChange={(event)=> onLastNameChange(event)}/>
            </div>
            <div className="field">
                <label>Balance</label>
                <input className="input" value={props.balance} onChange={(event)=> onBalanceChange(event)}/>
            </div>
            <div className="field">
                <label>Title</label>
                <input className="input" value={props.title} onChange={(event)=> onTitleChange(event)}/>
            </div>
            <div className="field">
                <label>Email</label>
                <input className="input" value={props.email} onChange={(event)=> onEmailChange(event)}/>
            </div>
            <button className="ui button" onClick={(event)=> onFormSubmit(event)}>
                Submit
            </button>
            <button className="ui button" onClick={(event)=> onCancelForm(event)}>
                Cancel
            </button>
        </div>
    )
}

