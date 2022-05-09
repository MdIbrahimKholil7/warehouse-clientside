import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { sendEmailVerification } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../../Shared/Social/Social';
import auth from '../../_firebase.init';
import './Register.css'
import PageTitle from '../../Shared/PageTitle/PageTitle';
import useToken from '../../../hooks/useToken';
const Register = () => {
    const [open, setOpen] = useState(true)
    const [user] = useAuthState(auth)
    const [token]=useToken(user)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const [error, setError] = useState({
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
        firebaseError: ''
    })
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [
        createUserWithEmailAndPassword,
        emailUser,
        loading,
        firebaseError
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    useEffect(() => {
        if (firebaseError) {
            switch (firebaseError?.code) {
                case 'auth/email-already-in-use':
                    setError({ ...error, firebaseError: 'Email already exist' })
                    break;
                case 'auth/invalid-emai':
                    setError('auth/invalid-email')
                    break;
                default: setError({ ...error, firebaseError: 'Something went wrong' })
            }
        }
    }, [firebaseError])
    console.log(firebaseError)
    console.log(error)
    if (token) {
        navigate(from, { replace: true })
    }
    // get email 
    const handleEmail = event => {
        const email = event.target.value
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
        if (!regex) {
            setError({ ...error, emailError: 'Please provide a valid email' })
            setUserInfo({ ...userInfo, email: "" })
        } else {
            setError({ ...error, emailError: "" })
            setUserInfo({ ...userInfo, email })
        }
    }


    // get password 
    const handlePassword = event => {
        const password = event.target.value
        if (!password || password.length < 6) {
            setError({ ...error, passwordError: 'Password should be greater than 6' })
            setUserInfo({ ...userInfo, password: '' })
        } else {
            setError({ ...error, passwordError: "" })
            setUserInfo({ ...userInfo, password })
        }
    }
    // get ConfirmPassword
    const confirmPassword = event => {
        const confirmPassword = event.target.value
        if (userInfo.password !== confirmPassword) {
            setError({ ...error, confirmPasswordError: `Password didn't password` })
            setUserInfo({ ...userInfo, confirmPassword: '' })
        } else {
            setError({ ...error, confirmPasswordError: "" })
            setUserInfo({ ...userInfo, confirmPassword })
        }
    }
    console.log(user)
    const handleSubmit = event => {
        event.preventDefault()
        if (firebaseError) {
            setError({ ...error, firebaseError: '' })
            console.log(error)
        }
        if (userInfo.email && userInfo.password) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
            toast(<p className='fs-4'>Please verify your email</p>)
        }
        event.target.reset()
    }

    return (
        <div className='form-container'>
            <PageTitle title='Register'/>
            <div className='auth-form'>
                <h1 className='text-center'>Please Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" placeholder='Enter your email' required />
                        <p className='error'>{error.emailError && error.emailError}</p>
                    </div>
                    <div className='input-div relative'>
                        <label className='fs-4 mb-2' htmlFor="Password">Password <span onClick={() => setOpen(!open)} className='eye-container'>{open ? <EyeIcon className='eye-icon' /> : <EyeOffIcon className='eye-icon' />}</span></label>
                        <input onBlur={handlePassword} type={`${open ? 'password' : 'text'}`} name="password" placeholder='Enter your password' required />

                    </div>
                    <p className='error'>{error.passwordError && error.passwordError}</p>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="Confirm Password">Confirm Password</label>
                        <input onBlur={confirmPassword} type="password" name="confirm-password" placeholder='Confirm password' required />
                        <p className='error'>{error.confirmPasswordError && error.confirmPasswordError}</p>
                    </div>
                    <button className='submit-btn' type='submit'>Register</button>
                    <p className='error'>{error.firebaseError && error.firebaseError}</p>
                    <p className='fs-4 text-center my-5'>Already have an account ? <Link to='/login'>Login</Link></p>
                    <Social />
                   <ToastContainer/>
                </form>
            </div>
        </div>
    );
};

export default Register;