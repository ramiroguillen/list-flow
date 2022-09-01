// libraries
import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ];

    // states
    const [credentials, setCredentias] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;