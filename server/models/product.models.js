import { Schema, model } from 'mongoose'

const productSchema = new Schema(
    {
        title: { type: String },
        price: { type: Number },
        brand: { type: String },
        description: { type: String },
        size: { type: Number },
        images: [String]
    },
    {
        timestamps: true
    }
)

export const Product = model('Product', productSchema)