import React, { useState } from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import classes from '../Users/AddUser.module.css';


const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');

    const [enteredAge, setEnteredAge] = useState('');



    const addUserHandler = (event) => {
        event.preventDefault();

        console.log(enteredUserName, enteredAge);

    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type="text" onChange={ userNameChangeHandler }/>
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type="number" onChange={ ageChangeHandler }/>

            <Button type='submit'>Add User</Button>
        </form>
        </Card>
    );
};

export default AddUser; 