const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const mernRoutes = express.Router();

let Mern = require('./mernStack.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mernStack', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


app.use('/mernStack', mernRoutes);

mernRoutes.route('/').get(function(req, res) {
    Mern.find(function(err, mernStack) {
        if (err) {
            console.log(err);
        } else {
            res.json(mernStack);
        }
    });
});
mernRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Mern.findById(id, function(err, mern){
        res.json(mern);
    });
});

mernRoutes.route('/add').post(function(req, res) {
    
    let mern = new Mern(req.body);
    console.log("object");
    mern.save()
        .then(mern => {
            res.status(200).json({'mern':'mern added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new mern failed');
        });
});
mernRoutes.route('/update/:id').post(function(req, res) {
    Mern.findById(req.params.id, function(err, mern){
        if(!mern)
            res.status(404).send("Data is not found");
        else
            mern.name = req.body.name;
            mern.email = req.body.email;
            mern.gender = req.body.gender;
            mern.isAdmin = req.body.isAdmin;

            mern.save().then(mern => {
                res.json('mernStack updated!');
            })
            .catch(err => {
                res.status(404).send("Update not possible");
            });
    });
});