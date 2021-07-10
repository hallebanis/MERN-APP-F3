import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, logout } from '../redux/actions/authActions'
import { Redirect } from 'react-router-dom'
import AddPost from '../component/AddPost'
import { getPost } from '../redux/actions/postActions'
import Post from '../component/Post'

const Profile = () => {
    const auth = useSelector(state => state.auth)
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile())
        dispatch(getPost())
    }, [])
    return (<><div>

        <h1>Profile Page for {auth.user && auth.user.firstname}</h1>
        <AddPost></AddPost>
        <div>
            {posts.postList.length && posts.postList.map((post, index) => <Post key={index} post={post}></Post>).reverse()}
        </div>
    </div>

    </>
    )
}

export default Profile
