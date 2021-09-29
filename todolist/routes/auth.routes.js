const router = require('express').Router();
const {User} = require('../models/user.model');
const bcrypt = require('bcrypt')
const {UserDto} = require('../dto/user.dto')
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body;


        const existedUser = await User.findOne({email})
        if (existedUser) return res.status(400).json({msg: 'User Already Exists'});


        const user = new User({
            name,
            email,
            role: 'publisher',
        })

        const hashedPassword = bcrypt.hashSync(password, 10)
        user.password = hashedPassword
        await user.save()

        res.status(201).json({
            user: UserDto(user)
        })
    } catch(err) {
        console.log(err);
        res.status(400).json({msg: 'Failed To Create User', err})
    }
   
})

// Signin
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email})

    if (!user) return res.status(400).json({msg: "Incorrect Credentials"})

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) return res.status(400).json({msg: "Incorrect Credentials"})
    const userData = UserDto(user)
    
    const token = jwt.sign(userData, 'djkfoojhfhjfk')

    res.status(200).json({
        user: userData,
        token
    })

})


module.exports = router;