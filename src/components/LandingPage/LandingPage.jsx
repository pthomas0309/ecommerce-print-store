/* REACT IMPORTS */
import { useState } from 'react';

/* REDUX IMPORTS */
import { useDispatch } from 'react-redux';

/* REACT-ROUTER IMPORTS */
import { useHistory } from 'react-router';


export default function LandingPage() {

    const history = useHistory();

    const [email, setEmail] = useState({
        emailAddress: '',
        isSubmitted: false
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

        if (email.emailAddress !== '') {
            
            // call function to post email to DB
            saveEmail();

        } else {

            // alert the user that the input value
            // is blank
            alert('Could not complete action, email address field is empty')
        }
    }

    /* saveEmail will send the value of the email
    state variable to the saga that will
    save it to the database under user data */
    const saveEmail = () => {
        console.log('saving email');

        // dispatch value of email to
        // user data saga as well as a
        // function to run if a positive 
        // status code returns from the server
        dispatch({
            type: 'SAVE_EMAIL',
            payload: email.emailAddress,
            submissionSuccess: submissionSuccess()
        })

    }

    /* submissionSuccess function will update email.isSubmitted
    bool to true, which updates the way the view is rendered */
    const submissionSuccess = () => {

        setEmail({
            ...email,
            isSubmitted: true
        });
    }
    
    console.log(email);

    return (
        <div>
            <h1>Welcome to the design store</h1>

            {/* If email.isSubmitted evaluates truthy, it means the email address was received and has
            been posted to the database successfully so we can render a message indicating that
            no further input is required. Otherwise a falsy value will render a form that will post
            to the database */}
            {email.isSubmitted ? 

                <div>
                    <p>Thank you for joining our newsletter!</p>
                </div>

            :

                <div>
                    <p>Sign up for our newsletter for updates on new products</p>

                    <form onSubmit={(e) => validateEmail(e)}>

                        <label htmlFor="email">
                            <input type="text" id="email" value={email.emailAddress} onChange={e => updateEmail(e)} />
                        </label>

                        <input value="Opt-in to Emails" type="submit" />

                    </form>
                </div>
                
            }

            <button onClick={ () => history.push('/storefront') } >Down the Rabbit Hole</button>

        </div>
    )
}
