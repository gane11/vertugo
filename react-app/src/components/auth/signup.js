

import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';

const SignUpForm = ({ authenticated, setAuthenticated }) => {
    const [owner, setOwner] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            let user = new FormData();
            user.append('owner', owner);
            user.append('firstName', firstName);
            user.append('lastName', lastName);
            user.append('email', email);
            user.append('password', password);
            user = await dispatch(signupUser(user));

            if (user && !user.errors) {
                setAuthenticated(true);
                history.push("/")
            }
        }
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    const updateIsOwner = (e) => {
        setOwner(e.target.value);
    }

    if (authenticated) {
        return <Redirect to="/" />;
    }

    return (
        <form onSubmit={onSignUp}>
            <div>
                <label>Owner</label>
                <select
                    type="checkbox"
                    name="owner"
                    onChange={updateIsOwner}
                    value={owner}
                >
                </select>
            </div>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="first_name"
                    onChange={updateFirstName}
                    value={firstName}
                ></input>
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="last_name"
                    onChange={updateLastName}
                    value={lastName}
                ></input>
            </div>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={updateEmail}
                    value={email}
                ></input>
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={updatePassword}
                    value={password}
                ></input>
            </div>
            <div>
                <label>Repeat Password</label>
                <input
                    type="password"
                    name="repeat_password"
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                ></input>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
