const path=require('path');
const rootDirectory=require('../utilities/path');
const express=require('express');
const router=express.Router();
//mini app pluggable to another express app

router.get('/shop', (re,res)=>{
    /*console.log(path.join(__dirname, '..', 'views', 'add-product.html'));*/
    //here we find folder with file admin.js, then went out from folder, found folder views, found in this folder file with name add-product.html
    res.sendFile(path.join(rootDirectory,'views', 'shop.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/', (req,res)=>{
    res.redirect('/shop');//redirect on shop.html
});

module.exports=router;