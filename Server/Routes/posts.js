const router = require('express').Router();
const Post = require('../Models/Post');
const User = require('../Models/User');

const bcrypt = require('bcrypt');

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err){
        return res.status(505).json(err)
    }
})

router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err){
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({
                $set : req.body
            })

            res.status(200).json('Post has been updated');
        } else{
            res.status(403).json('You can only update your post')
        }
    } catch(err){
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json('Post has been deleted');
        } else{
            res.status(403).json('You can only delete your post')
        }
    } catch(err){
        res.status(500).json(err);
    }
})

router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({
                $push : {
                    likes : req.body.userId
                }
            })
            res.status(200).json('Post has been liked');
        } else{
            await post.updateOne({
                $pull : {
                    likes : req.body.userId
                }
            })
            res.status(200).json('Post has been disliked');
        }
    } catch(err){
        res.status(500).json(err);
    }
});

router.get('/timeline/all', async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId : currentUser._id});

        console.log(currentUser, userPosts)
        const friendPosts = await Promise.all(
            currentUser.following.map((frndId) => {
                return Post.find({userId : frndId});
            })
        )

        res.json(userPosts.concat(...friendPosts));
    } catch (err){
        res.status(500).json(err);
    }
})

module.exports = router;