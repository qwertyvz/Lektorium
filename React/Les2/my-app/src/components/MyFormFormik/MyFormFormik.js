import React from 'react'
import { Formik } from 'formik'
import '../MyFormFormik/MyFormFormik.scss'

const MyFormFormik = () => (
    <div>
        <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '', phone: '' }}
            validate={values => {
                const errors = {}
                if (!values.username) {
                    errors.username = <p className='formErrors'>Required</p>
                } else if (values.username.length < 3) {
                    errors.username = <p className='formErrors'>Username is to short use at least 3 symbols</p>
                }
                if (!values.email) {
                    errors.email = <p className='formErrors'>Required</p>
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = <p className='formErrors'>Invalid email address</p>
                }
                if (!values.password) {
                    errors.password = <p className='formErrors'>Required</p>
                } else if (values.password.length < 6) {
                    errors.password = <p className='formErrors'>Password is to short use at least 6 symbols</p>
                }
                if (!values.confirmPassword) {
                    errors.confirmPassword = <p className='formErrors'>Required</p>
                } else if (values.password !== values.confirmPassword) {
                    errors.confirmPassword = <p className='formErrors'>Confirm password is not equal</p>
                }
                if (!values.phone) {
                    errors.phone = <p className='formErrors'>Required</p>
                } else if (
                    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.phone)
                ) {
                    errors.phone = <p className='formErrors'>Invalid phone number</p>
                }
                return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                }, 400)
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                    <div className="wrapper">
                        <form className="container" onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="username" className="form-label">Username:</label>
                                <input 
                                    className="form-control"
                                    type="username"
                                    name="username"
                                    placeholder="Enter username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                />
                                {errors.username && touched.username && errors.username}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Enter e-mail"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                />
                                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="phone" className="form-label">Phone:</label>
                                <input
                                    className="form-control"
                                    type="phone"
                                    name="phone"
                                    placeholder="Enter phone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                />
                                {errors.phone && touched.phone && errors.phone}
                            </div>
                            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Register</button>
                        </form>
                    </div>
                )}
        </Formik>
    </div>
)

export default MyFormFormik