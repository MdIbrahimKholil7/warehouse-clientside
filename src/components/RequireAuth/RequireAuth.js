import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import VerifyEmail from '../VerfiyEmail/VerifyEmail';
import auth from '../_firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return (
            <div className=" d-flex justify-content-center align-items-center spinner">
                <div class="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }
    if (user?.providerData[0]?.providerId === 'password' && !user?.emailVerified) {
        return <VerifyEmail />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default RequireAuth;