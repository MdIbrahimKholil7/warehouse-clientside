import React from 'react';
import './Social.css'
import google from '../../../img/google.png'
import facebook from '../../../img/facebook.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';
const Social = () => {
    const [signInWithGoogle,user,loading,error]=useSignInWithGoogle(auth)
    const handleGoogle=()=>{
        signInWithGoogle()
        .then(res=>{
            console.log('Google login successful')
        }).catch(error=>{
            console.log(error)
        })
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