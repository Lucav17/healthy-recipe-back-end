const mongoose = require('mongoose'),
    Category = require('../models/Category');

exports.createCategory = (req, res) => {
    Category.findOne({categoryName: req.body.categoryName}, (err, existingCat) => {
        if(existingCat) {
            return res.status(400).send({err: "This category exists"})
        }
        if(err) {
            return res.status(400).send({err:err})
        }
        let newCategory = new Category({
            categoryName: req.body.categoryName
        });

        newCategory.save((saveErr, success) => {
            if(saveErr) {
                return res.status(400).send({err: saveErr})
            }
            return res.status(200).send({result:'success'})
        })

    })
        
}