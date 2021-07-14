import React from 'react'
import Post from './Post'

const PostList = ({ postList }) => {
    return (
        <div>
            {postList.length && postList.map((post, index) => <Post key={index} post={post}></Post>).reverse()}
        </div>
    )
}

export default PostList
