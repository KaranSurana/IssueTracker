const mongoose = require('mongoose');

const issuesSchema = new mongoose.Schema({
    issuename: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const issues = mongoose.model('Issue', issuesSchema);

module.exports = issues;