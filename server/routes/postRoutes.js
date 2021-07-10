const router = require('express').Router()
const postController = require('../controllers/postController')
const { tokenMiddleware, checkPostOwner } = require('../middlewares/tokenMiddleware')




router.get('/posts', postController.getAllPosts)
router.get('/myposts', tokenMiddleware, postController.getMyPosts)
router.delete('/deletepost/:id', tokenMiddleware, checkPostOwner, postController.deletePost)
router.post('/addpost', tokenMiddleware, postController.addPost)
router.put('/updatepost/:id', tokenMiddleware, checkPostOwner, postController.updatePost)

module.exports = router