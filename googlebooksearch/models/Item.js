const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create Schema

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    image: {
        type: Image,
        default: true
    },
    link: {
        type: URL

    }

})
module.exports = Item = mongoose.model('item', ItemSchema);
