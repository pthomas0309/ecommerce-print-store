import { useState } from 'react';

export default function LandingPage() {

    const [email, setEmail] = useState({
        emailAddress: ''
    });

    const updateEmail = e => {
        // stop page load
        e.preventDefault();

        // update state variable with input value
        setEmail({
           emailAddress: e.target.value
        });

    }

    const validateEmail = e => {
        //stop page load
        if (e.target.value != '') {

        }
    }
    
    return (
        <div>
            <h1>Welcome to the design store</h1>

            <form onSubmit={(e) => validateEmail(e)}>

                <label for="email">
                    <input type="text" id="email" value={email} onChange={e => updateEmail(e)} />
                </label>

                <input value="Opt-in to Emails" type="submit" />

            </form>


        </div>
    )
}
