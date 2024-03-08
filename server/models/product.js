import { Schema, model } from 'mongoose'

const productSchema = new Schema(
    {
        tittle: { type: String },
        price: { type: Number },
        brand: { type: String },
        description: { type: String },
        size: { type: Number },
        image: { type: String }
    },
    {
        timestamps: true
    }
)

export const Product = model('Product', productSchema)