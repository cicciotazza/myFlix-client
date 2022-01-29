import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './registration-view.scss';

// { useState } Reat Hook  https://reactjs.org/docs/hooks-state.html
export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState("");

    //Change the state of MainView for registering and logging-ing, sending a request to the server for authenticate
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        props.onRegistration(username);
    };

    return (
        <form>
            <label className="username">Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label className="name">Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="password">Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label className="email">E-mail:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="birthdate">Birth date:
                <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
            </label>
            <button className="registerBtn" type="submit" onClick={handleSubmit}>Register </button>
        </form>
    );
}

//Information about data when not matching the requested input
RegistrationView.propTypes = {
    register: PropTypes.shape({
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        birthdate: PropTypes.string.isRequired,
    }),
    onRegistration: PropTypes.func.isRequired,
};