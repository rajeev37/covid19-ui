import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

const SignUp = inject("stores")(observer(class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            email: "",
            password: ""
        }
        console.log("######", this.props.stores.SignUpStore.test);
    }
    changeHandler = e => {
        console.log("####", e.target);
        this.setState({ [e.target.name]: e.target.value });
    }
    submitSignUp = (e) => {
        e.preventDefault();
        console.log("$$$$$$$$$$$", this.state);
    }
    render() {
        const { fName, lName, email, password } = this.state;
        return (
            <div id="sign-up-form">
                <form>
                    <label for="username">I am a</label>
                    <label for="userType">
                        <input type="radio" name="userType" value="Doctor" />
                        <span>Doctor</span>
                    </label>
                    <label for="userType">
                        <input type="radio" name="userType" value="Patient" />
                       <span>Patient</span>
                     </label>
                     <label for="contactNumber">Contact Number</label>
                    <input type="number" name="contactNumber" />
                    
                    <label for="username">Username</label>
                    <input type="text" name="username" />
                    <label for="password">Password</label>
                    <input id="password" type="password" name="password" />
                    <label for="password0">Re-Enter Password</label>
                    <input id="password0" type="password" name="password0" />
                    <input type="submit" className="button" name="submit" value="Create Account" />
                </form>
            </div>
        );
    }
}));
export default SignUp;