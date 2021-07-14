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
            newPost.image = {
                url: savedImage.url,
                public_id: savedImage.public_id
            }
        }

        const savedPost = await newPost.save()
        res.json(savedPost)
    } catch (err) {
        res.status(400).json({ err: err.message })
    }


}

const getAllPosts = async (req, res) => {
    try {
        let limit = +req.query.limit
        let pageNumber = +req.query.page
        let documentCount = await Post.find().countDocuments()
        let numberTotalOfpages = Math.ceil(documentCount / limit);

        /*   if (numberTotalOfpages < documentCount / limit)
              numberTotalOfpages++ */
        //out of band verification
        if (pageNumber > numberTotalOfpages)
            pageNumber = numberTotalOfpages
        /* if (pageNumber * limit > documentCount)
            limit = documentCount - ((pageNumber - 1) * limit) */

        const posts = await Post.find({})
            .select({ '__v': 0 })
            .sort({ 'createdAt': -1 })
            .populate({ path: 'owner', select: "firstname image lastname email _id role " })
            .skip((pageNumber - 1) * limit)
            .limit(limit)

        res.json({ posts })
    }
    catch (err) {
        res.status(400).json({ err: err.message })
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
        res.status(400).json({ errors: [{ msg: err.message }] })
    }
}
const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { ...req.body })
        res.json(updatedPost)
    }
    catch (err) {
        res.status(400).json({ errors: [{ msg: err.message }] })
    }
}

const getPostsCount = async (req, res) => {
    try {
        const count = await Post.find().countDocuments()
        res.json({ count })
    }
    catch (err) {
        res.status(400).json({ errors: [{ msg: err.message }] })

    }
}

module.exports = { getAllPosts, getMyPosts, getPostsCount, addPost, updatePost, deletePost }
