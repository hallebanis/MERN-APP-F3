import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/actions/postActions'
import Compressor from 'compressorjs'
import { Button, makeStyles, TextareaAutosize, TextField } from "@material-ui/core"
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
    button: {
        margin: theme.spacing(1),
    },
}));


const AddPost = () => {
    const classes = useStyles();
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
            new Compressor(myImage, {
                quality: 0.8,
                success(result) {
                    const reader = new FileReader()
                    reader.readAsDataURL(result)
                    reader.onloadend = () => {
                        setSelectedImage(reader.result)
                        setNewPost({ image: reader.result })
                    }

                }
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost(newPost))

    }
    return (
        <div className={classes.root}>
            <form className="flex-column-center" style={{ width: "50vw" }} onSubmit={handleSubmit}>
                {selectedImage && <img name="preview" style={{ height: "200px" }} src={selectedImage || "./images/default.jpg"} alt="preview"></img>}
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={handleImageChange}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label>
                {/* <input accept="image/*" type="file" name='image' onChange={handleImageChange} ></input> */}
                <TextareaAutosize aria-label="Post description"
                    placeholder="Post Description"
                    style={{ height: "100px", width: "100%", boxShadow: "5px 5px grey" }}
                    onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                >
                    Share
                </Button>
            </form>

        </div>
    )
}

export default AddPost
