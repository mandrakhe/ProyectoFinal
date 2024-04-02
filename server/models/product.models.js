import { Schema, model } from 'mongoose';

const productSchema = new Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        brand: { type: String, required: true },
        description: { type: String, required: true },
        size: { type: Number, required: true },
        images: [String]
    },
    {
        timestamps: true
    }
);

export const Product = model('Product', productSchema);
