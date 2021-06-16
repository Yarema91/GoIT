const { Schema, model } = require('mongoose ')

const schema = new Schema({
    title: {
        type: 'string',
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = model('Todo', schema)