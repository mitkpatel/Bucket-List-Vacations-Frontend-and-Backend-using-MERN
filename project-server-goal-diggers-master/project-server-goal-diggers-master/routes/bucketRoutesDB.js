const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
let Buckets = require('../models/Buckets');


const uuid = require('uuid');

const router = express.Router();

const { check, validationResult } = require('express-validator');
const req = require('express/lib/request');
//route Get api/bucket
//desc Get all bucket
//access public
router.get('/', async (req, res) => {
  try {
      const bucketDB = await Buckets.find();
      res.send(bucketDB)
  } catch(err){
      return res.status.apply(500).send('Server error');
  }
});



//route Post api/bucket
//desc Insert bucket
//access public
router.post(
  '/',
   [
  check('title', 'title is required').not().isEmpty(),
  check('location', 'location is required').not().isEmpty(),
  check('category', 'category is required').not().isEmpty(),
  check('budget', 'budget is required').not().isEmpty(),
], 
async (req, res) => {

    try{
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
      }

      const file = req.files.myFile;
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }

      const path2 = 'public/uploads/' + file.name;

      file.mv(path2, function (err){
        if(err) return res.status(500).send(err);

        //res.send('File uploaded!');
      });

        const newBucket = await Buckets.create({
          title: req.body.title,
          location:req.body.location,
          category: req.body.category,
          budget: req.body.budget,
          photo: file.name,
        });
            res.send(newBucket);
         
    } catch(err){
        return res.status(404).send('item not found');
    }
  
  
});



module.exports = router;
