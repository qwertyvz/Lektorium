import React from 'react'
import Input from './Input'
import {FormErrors} from './FormErrors'
import './MyFormSimple.scss'
import update from 'immutability-helper'

export default class MyFormSimple extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            formErrors: { 
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                phone: ''
            },
            usernameValid: false,
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            phoneValid: false,
            formValid: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(event) {
        const name = event.target.name
        const value = event.target.value
        let newState = update(this.state[name], { $set: value })
        this.setState({ [name]: newState }, () => { this.validateField(name, value) })
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors
        let errorText = '';
        let { usernameValid, emailValid, passwordValid,  confirmPasswordValid, phoneValid } = this.state
        switch (fieldName) {
            case 'username':
                if (value.length === 0 || value.length < 3) {
                    usernameValid = false
                    value.length === 0 ? errorText = ' required' : errorText = ' is to short use at least 3 symbols'
                } else {
                    usernameValid = true
                    errorText = ''
                } 
                fieldValidationErrors.username = usernameValid ? '' : errorText
                break;
            case 'email':
                if (value.length === 0 || !/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value)) {
                    emailValid = false
                    value.length === 0 ? errorText = ' required' : errorText = ' is invalid'
                } else {
                    emailValid = true
                    errorText = ''
                }
                fieldValidationErrors.email = emailValid ? '' : errorText
                break;
            case 'password':
                if (value.length === 0 || value.length < 6) {
                    passwordValid = false
                    value.length === 0 ? errorText = ' required' : errorText = ' is to short use at least 6 symbols'
                } else {
                    passwordValid = true
                    errorText = ''
                }
                fieldValidationErrors.password = passwordValid ? '' : errorText
                break;
            case 'confirmPassword':
                if (value.length === 0 || this.state.password !== this.state.confirmPassword) {
                    confirmPasswordValid = false
                    value.length === 0 ? errorText = ' required' : errorText = ' is not equal'
                } else {
                    confirmPasswordValid = true
                    errorText = ''
                }
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : errorText
                break;
            case 'phone':
                phoneValid = true;
                if (value.length === 0 || !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
                    phoneValid = false
                    value.length === 0 ? errorText = ' required' : errorText = ' is invalid'
                } else {
                    phoneValid = true
                    errorText = ''
                }
                fieldValidationErrors.phone = phoneValid ? '' : errorText
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmPasswordValid: confirmPasswordValid,
            phoneValid: phoneValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.usernameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid && this.state.phoneValid })
    }

    onSubmit(event) {
        event.preventDefault()
        setTimeout(() => {
            alert(JSON.stringify(this.state, null, 2));
        }, 400)
    }

    render() {
        return(
            <div className="wrapper">
                <form className="container" onSubmit={this.handleFormSubmit}>
                <Input
                    inputType={"text"}
                    title={"Username:"}
                    name={"username"}
                    placeholder={"Enter username"}
                    handleChange={this.onChange}
                    handleError={this.state.formErrors.username}
                />
                <Input
                    inputType={"text"}
                    title={"Email:"}
                    name={"email"}
                    placeholder={"Enter e-mail"}
                    handleChange={this.onChange}
                    handleError={this.state.formErrors.email}
                />
                <Input
                    inputType={"password"}
                    title={"Password:"}
                    name={"password"}
                    placeholder={"Enter password"}
                    handleChange={this.onChange}
                    handleError={this.state.formErrors.password}
                />
                <Input
                    inputType={"password"}
                    title={"Confirm Password:"}
                    name={"confirmPassword"}
                    placeholder={"Confirm password"}
                    handleChange={this.onChange}
                    handleError={this.state.formErrors.confirmPassword}
                />
                <Input
                    inputType={"text"}
                    title={"Phone:"}
                    name={"phone"}
                    placeholder={"Enter phone"}
                    handleChange={this.onChange}
                    handleError={this.state.formErrors.phone}
                />
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <button className="btn btn-primary" onClick={this.onSubmit} disabled={!this.state.formValid}>Register</button>
                </form>
            </div>
        )
    }
}