import React, { useState } from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from '../Users/AddUser.module.css';


const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');

    const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState();



    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){

            setError({
                title: 'Invalid input',
                message: 'Please enter the valid name and age (non-empty values)'
            });

            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter the valid age ( > 0 )'
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredAge);

        // reset the input form data
        setEnteredUserName('');
        setEnteredAge('');


    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            
            { error && (
                <ErrorModal 
                    title={error.title} 
                    message={error.message} 
                    onConfirm={errorHandler} />
            ) }
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type="text" value={enteredUserName} onChange={ userNameChangeHandler }/>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type="number" value={enteredAge} onChange={ ageChangeHandler }/>

                <Button type='submit'>Add User</Button>
            </form>
            </Card>
        </>
    );
};

export default AddUser; 