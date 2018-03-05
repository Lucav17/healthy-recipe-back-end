const mongoose = require('mongoose'),
    Email = require('../models/Email');

exports.createOrFindEmail = (req, res) => {
    Category.findOne({email: req.body.email}, (err, existingEm) => {
        if(existingCat) {
            return res.status(200).send({result:"email found."})
        }
        if(err) {
            return res.status(400).send({err:err})
        }
        let newEmail = new Email({
            email: req.body.emailcategoryName
        });

        newEmail.save((saveErr, success) => {
            if(saveErr) {
                return res.status(400).send({err: saveErr})
            }
            return res.status(200).send({result:'success'})
        })

    })
        
}