const router = require('express').Router();
const User = require('../Models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword,
    })
    
    try{

        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        console.log(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email : req.body.email})

        if(!user){
            res.status(400).json('User not found');
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            res.status(400).json('Wrong Password');
        }

        res.status(200).json(user);
    } catch (err){
        res.status(500).json(err);
    }
})

module.exports = router;