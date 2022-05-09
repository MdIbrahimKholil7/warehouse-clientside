import React from 'react';
import './Social.css'
import google from '../../../img/google.png'
import facebook from '../../../img/facebook.png'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';
import useToken from '../../../hooks/useToken';
import { useLocation, useNavigate } from 'react-router-dom';
const Social = () => {
    const [user] = useAuthState(auth)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const [token] = useToken(user)
    const [signInWithGoogle, users, loading, error] = useSignInWithGoogle(auth)
    if (token) {
        navigate(from, { replace: true })
    }
    console.log(token)
    console.log(user)
    const handleGoogle = async () => {
        await signInWithGoogle()
    }

    return (
        <div>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="left-div"></div>
                    <p className='fs-4 mt-2 px-2'>or</p>
                    <div className="right-div"></div>
                </div>
                <div className="social-icon">
                    <button onClick={handleGoogle} type='submit' className='icon-btn'><img className='me-3' src={google} alt="" />Google SignIn</button>
                    <button type='submit' className='icon-btn mt-4' ><img className='fb-icon me-3' src={facebook} alt="" />FaceBook SignIn</button>
                </div>
            </div>
        </div>
    );
};

export default Social;