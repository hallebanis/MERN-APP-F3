import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddPost from '../component/AddPost'
import PostList from '../component/PostList'
import { getPost, getPostCount } from '../redux/actions/postActions'
import { Pagination } from '@material-ui/lab'
import LimitSelector from '../component/LimitSelector'

const Home = () => {
    const postList = useSelector(state => state.posts.postList)
    const auth = useSelector(state => state.auth)
    const count = useSelector(state => state.posts.count)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)
    useEffect(() => {
        dispatch(getPostCount())
        dispatch(getPost(page, limit))
    }, [])

    const handlePageChange = (e, p) => {
        setPage(p)
        dispatch(getPost(p, limit))
    }

    return (
        <>
            {auth.isAuth && <AddPost></AddPost>}
            <Pagination count={Math.ceil(count / limit)} onChange={handlePageChange} />
            <LimitSelector setLimit={setLimit} />
            <PostList postList={postList}></PostList>
        </>
    )
}

export default Home
