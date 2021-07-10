const Post = require('../models/Post')
const cloudinary = require('../helpers/cloudianry')



const addPost = async (req, res) => {
    try {
        const { description, image } = req.body
        const newPost = new Post({
            description,
            owner: req.userId
        })
        if (image) {
            const savedImage = await cloudinary.uploader.upload(image, {
                timeout: 60000,
                upload_preset: "f3-dev"
            })
            console.log(savedImage)
            newPost.image = {
                url: savedImage.url,
                public_id: savedImage.public_id
            }
        }

        const savedPost = await newPost.save()
        console.log(savedPost)
        res.json(savedPost)
    } catch (err) {
        res.status(400).json({ err: err })
    }


}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate('owner')
        res.json(posts)
    }
    catch (err) {
        res.status(400).json({ err: err })
    }
}
const getMyPosts = async (req, res) => {
    try {
        const posts = await Post.find({ owner: req.userId })
        res.json(posts)
    }
    catch (err) {
        res.status(400).json({ err: err })
    }
}

const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id)
        res.json(deletedPost)
    }
    catch (err) {
        res.status(400).json({ err: err })
    }
}
const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { ...req.body })
        res.json(updatedPost)
    }
    catch (err) {
        res.status(400).json({ err: err })
    }
}

module.exports = { getAllPosts, getMyPosts, addPost, updatePost, deletePost }
