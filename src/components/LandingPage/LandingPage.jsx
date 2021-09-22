import { useState } from 'react';

import { useDispatch } from 'react-redux';


export default function LandingPage() {

    // local state variable bound to text input
    const [email, setEmail] = useState({
        emailAddress: ''
    });

    // enables data forwarding to Redux modules
    const dispatch = useDispatch();

    const updateEmail = e => {
        // stop page load
        e.preventDefault();

        console.log(e.target.value);

        // update state variable with input value
        setEmail({
           emailAddress: e.target.value
        });

    }

    /* validate email is called after the submit
    is triggered in the form*/
    const validateEmail = e => {
        // stop page load
        e.preventDefault();

        // conditional checks if email variable is not blank
        if (email.emailAddress !== '') {
            
            // variable is not blank
            // call function to post email to DB
            saveEmail();

        } else {

            // variable is blank
            // alert the user
            alert('Could complete action, Email Address field is empty')
        }
    }

    /* saveEmail will send the value of the email
    state variable to the saga that will
    save it to the database under user data */
    const saveEmail = () => {
        console.log('saving email');

        // dispatch value of local state to
        // user data saga
        dispatch({
            type: 'SAVE_USER_EMAIL',
            payload: email
        })

        console.log('email saved');
    }
    
    console.log(email);

    return (
        <div>
            <h1>Welcome to the design store</h1>

            <form onSubmit={(e) => validateEmail(e)}>

                <label htmlFor="email">
                    <input type="text" id="email" value={email.emailAddress} onChange={e => updateEmail(e)} />
                </label>

                <input value="Opt-in to Emails" type="submit" />

            </form>


        </div>
    )
}
