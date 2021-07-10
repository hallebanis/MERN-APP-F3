import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/actions/postActions'
import Compressorjs from 'compressorjs'


const AddPost = () => {
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState("")
    const [newPost, setNewPost] = useState(
        {
            description: '',
        }
    )
    const handleImageChange = (e) => {
        if (e.target.files.length) {
            const myImage = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(myImage)
            reader.onloadend = () => {
                setSelectedImage(reader.result)

            }
            new Compressorjs(reader.result, {
                quality: 0.8, success(result) {
                    setNewPost({ ...newPost, image: result })
                }, error(err) {
                    console.log(err)
                }
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost(newPost))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <img name="preview" style={{ height: "200px" }} src={selectedImage || "./images/default.jpg"} alt="preview"></img><br></br>
                <input accept="image/*" type="file" name='image' onChange={handleImageChange} ></input>
                <input name="description" onChange={(e) => setNewPost({ ...newPost, description: e.target.value })} placeholder="description" value={newPost.description} type="text"></input>
                <button type="submit">save</button>
            </form>

        </div>
    )
}

export default AddPost
