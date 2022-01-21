const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

router.get('/',(req,res,next)=> {
    try{
        res.send('this is the wiki')
    }
    catch(error){
        next(error);
    }
});
router.post('/',(req,res,next)=> {
    try{
        res.send('this is the wiki post')
    }
    catch(error){
        next(error);
    }
});
router.get('/add',(req,res,next)=> {
    try{
        res.send(addPage())
        //res.json(req.body)
    }
    catch(error){
        next(error);
    }
});

module.exports = router;