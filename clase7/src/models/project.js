const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    desciption: {
        type: String
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tarea'
        }
    ]
})

module.exports = mongoose.model('Proyecto', ProjectSchema)