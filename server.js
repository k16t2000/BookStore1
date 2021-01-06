const express = require('express');
const path=require('path');
const rootDirectory=require('./utilities/path');
//const mainRouter=require('./routes/main');
const adminRouter=require('./routes/admin');
const app=express();

app.use(express.static('public'));

app.use('/shop', (req,res)=>{
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
});


app.use('/admin', adminRouter);//admin- is a filter
// when button Add product is pressed

  

app.use((req,res)=>{
    res.status(404).sendFile(path.join(rootDirectory, 'views', '404.html'));
});

app.listen(5000, ()=>{
    console.log('Server is running on Port 5000');
})