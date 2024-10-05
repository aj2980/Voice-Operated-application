const express = require('express');
const User=require('../models/user')
const router=express.Router();
router.get('/register',(req,res)=>{
    res.render('users/register')
})

router.post('/register',async(req,res)=>{
    try{
    const {email,username,password}=req.body;
    const u=new User({email,username});
    const registerUser=await User.register(u,password)
    await registerUser.save();
    console.log(registerUser);
    res.redirect('/book')
    }
    catch(e){
        req.flash('error',e.message);
        res.redirect('register');
    }
})

module.exports=router;