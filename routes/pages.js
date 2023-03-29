const express = require('express');
const router = express.Router();
  
//route for index page
router.get('/', (req,res)=>{
    res.render('index') ;
  });
  
//route for about us page
router.get('/aboutUs', (req,res)=>{
    res.render('aboutUs');
  });
  
//route for advisory page
router.get('/advisory', (req,res)=>{
    res.render('advisory');
  });
  
//route for contact page
router.get('/contact', (req,res)=>{
    res.render('contact');
  });

router.get('/login', (req,res)=>{
    res.render('login');
});

router.get('/register', (req,res)=>{
    res.render('register');
});


module.exports= router;




  