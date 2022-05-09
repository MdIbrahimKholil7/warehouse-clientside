import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../../Shared/Social/Social';
import auth from '../../_firebase.init';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import useToken from '../../../hooks/useToken';
const Login = () => {
    const [open, setOpen] = useState(true)
    const [user] = useAuthState(auth)
    const [token]=useToken(user)
    const [error, setError] = useState({
        emailError: '',
        passwordError: '',
        firebaseError: ''
    })
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const [signInWithEmailAndPassword, loginUser, loading, loginError] = useSignInWithEmailAndPassword(auth)
    console.log(token)
    useEffect(() => {
        if (loginError) {
            switch (loginError?.code) {
                case 'auth/wrong-password':
                    setError({ ...error, firebaseError: 'Wrong password' })
                    break;
                case 'auth/invalid-emai':
                    setError('Please provide a valid email')
                    break;
                default: setError({ ...error, firebaseError: 'Something went wrong' })
            }
            return
        }
    }, [loginError])

    if(token){
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
    console.log(user)
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
    // forget password 
    const handleForgetPassword = () => {
        console.log(userInfo.email)
        sendPasswordResetEmail(auth, userInfo.email)
            .then(() => {
                toast(<p className='fs-4'>Password reset link sent in your email</p>)
            }).catch(error => {
                console.log(error)
            })
    }
    // form submit 
    const handleSubmit = async event => {
        event.preventDefault()
        if (loginError) {
            setError({ ...error, firebaseError: '' })
            console.log(error)
        }
        if (userInfo.email && userInfo.password) {
            await signInWithEmailAndPassword(userInfo.email, userInfo.password)
            
        }
        event.target.reset()
    }

    return (
        <div className='form-container'>
            <PageTitle title='Login'/>
            <div className='auth-form'>
                <h1 className='text-center'>Please Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" placeholder='Enter your email' required />
                        <p className='error'>{error.emailError && error.emailError}</p>
                    </div>
                    <div className='input-div'>
                        <label className='fs-4 mb-2' htmlFor="Password">Password</label>
                        <span onClick={() => setOpen(!open)} className='eye-container mt-2'>{open ? <EyeIcon className='eye-icon' /> : <EyeOffIcon className='eye-icon' />}</span>
                        <input onBlur={handlePassword}
                            type={`${open ? 'password' : 'text'}`} name="password" placeholder='Enter your password' required />
                    </div>
                    <p className='error'>{error.passwordError && error.passwordError}</p>
                    <button className='submit-btn' type='submit'>Login</button>
                    <p className='error text-center'>{error.firebaseError && error.firebaseError}</p>
                    <p className='fs-4 text-center my-5'>Dont't have an account ? <Link to='/register'>Register</Link></p>
                    <p onClick={handleForgetPassword} className='text-center text-primary fs-4 text-decoration-underline cursor'>Forget password</p>

                    <Social />
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Login;