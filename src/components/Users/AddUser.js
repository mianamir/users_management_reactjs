import React, { useState, useRef } from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from '../Users/AddUser.module.css';


const AddUser = (props) => {

    // using refs components are un controlled 
    // but using state components are under 
    // controlled because state is managed by REACT
    
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUserName, setEnteredUserName] = useState('');

    // const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState();



    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){

            setError({
                title: 'Invalid input',
                message: 'Please enter the valid name and age (non-empty values)'
            });

            return;
        }

        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter the valid age ( > 0 )'
            });
            return;
        }

        props.onAddUser(enteredName, enteredUserAge);

        // reset the input form data for state hook
        // setEnteredUserName('');
        // setEnteredAge('');

        // for ref hook
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';


    };

    // const userNameChangeHandler = (event) => {
    //     setEnteredUserName(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

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
                <input 
                id='username' 
                type="text" 
                ref={nameInputRef}
                />
                <label htmlFor='age'>Age (Years)</label>
                <input 
                id='age' 
                type="number" 
                ref={ageInputRef}
                />

                <Button type='submit'>Add User</Button>
            </form>
            </Card>
        </>
    );
};

export default AddUser; 