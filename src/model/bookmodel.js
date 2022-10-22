import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        author:{type:String},
        genre:{
            type: String,
            enum: ['fiction','non-fiction'],
            required: true,
            default: 'fiction'
        },
        pages:{
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const book = mongoose.model('book', bookSchema)