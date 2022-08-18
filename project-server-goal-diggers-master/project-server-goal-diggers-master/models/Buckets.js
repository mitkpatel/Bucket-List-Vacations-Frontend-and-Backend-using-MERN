const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bucketSchema = Schema({

   
    title: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    budget: {
        type: String,
        require: true,
    },
    photo: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('Buckets',bucketSchema);
