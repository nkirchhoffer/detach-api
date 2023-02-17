const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    date: String,
    inboundSize: Number,
    outboundSize: Number,
    sender: String,
    recipientsCount: Number,
    hasAttachments: Boolean
});

module.exports = mongoose.model('Mail', schema);