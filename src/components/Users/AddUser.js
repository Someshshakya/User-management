import React, { useState,useRef } from "react"; // importing useState || useRef
import Card from "../UI/Card";
import Button from "../UI/Button";
import claasses from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const enterUserName = useRef(); // declare ref for Username
    const enterUserAge = useRef(); // declare ref for age

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUsername = enterUserName.current.value; // assign the current value of username
        const enteredAge = enterUserAge.current.value; // ,,
        if (enteredUsername.trim().length < 0 || enteredAge.trim().length < 0) {
            setError({
                title: 'Invalid input',
                message:'Please enter a valid name and age (non empty values).'
            })
            return;

        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message:'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        // setEnteredUsername('');
        // setEnteredAge('');
        enterUserName.current.value = '' // making the enterUserName and Age empty 
        enterUserAge.current.value = ''
        console.log(enteredUsername,enteredAge)
    }
    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }
    // const   ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }
    const errorHandener = () => {
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandener}
            />}
            <Card className={claasses.input}>
                <form onSubmit={addUserHandler}>
                    <lable htmlFor="username">UserName</lable>
                    <input
                        id="username"
                        type="text"
                        ref={enterUserName}
                            // value={enteredUsername}
                            // onChange={usernameChangeHandler}
                        >
                        </input>
                    <lable htmlFor="age">Age (Years)</lable>
                    <input
                        id="age"
                        type="number"
                        ref={enterUserAge}
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                    >
                        </input>
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </div>
    )
 }

export default AddUser;