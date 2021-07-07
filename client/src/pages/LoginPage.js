import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authActions'

const LoginPage = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(info))
    }
    const history = useHistory()
    useEffect(() => {
        if (auth.isAuth)
            history.push('/profile')
    }, [auth.isAuth])
    return (
        <form className="flex-column-center" onSubmit={handleSubmit}>
            <input type="email" placeholder="account@domain.ext" onChange={(e) => setInfo({ ...info, email: e.target.value })}></input>
            <input type="password" placeholder="*********" onChange={(e) => setInfo({ ...info, password: e.target.value })}></input>
            <button type="submit" style={{ alignSelf: 'flex-end', color: "black" }}>Submit</button>
            <button type="reset" style={{ alignSelf: 'flex-end', color: "black" }}>Reset</button>
        </form>
    )
}

export default LoginPage
