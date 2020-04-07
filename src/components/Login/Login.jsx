import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { maxLengthCreator, required } from "../../utils/validators/validator";
import { Input,createField } from "../Common/FormsControls/FormsControls";
import styles from './../Common/FormsControls/FormsControls.module.css';

const maxLength10 = maxLengthCreator(25);

const LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField("Email","email",Input,[required])}

                {/* <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} /> */}
                {createField("Password","password",Input,[required],{type:"password"})}
                {/* <Field placeholder={"Password"} name={"password"} type={"password"}  component={Input} validate={[required]} /> */}
            <div>
                {createField(null,"rememberMe",Input,[],{type:"checkbox"},"rememberMe")}
                {/* <Field component={Input} name={"rememberMe"} type="checkbox"/>Remember me. */}
            </div>
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);