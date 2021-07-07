import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, logout } from '../redux/actions/authActions'
import { Redirect } from 'react-router-dom'

const Profile = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile())
    }, [])
    return (<>{
        auth.isAuth ? <div>

            <h1>Profile Page</h1>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div> : <Redirect to='/login'></Redirect>
    }
    </>
    )
}

export default Profile
