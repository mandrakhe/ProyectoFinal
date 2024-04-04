import mongoose from "mongoose";
const { Schema, model } = mongoose;

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true // Asegura que solo haya un carrito por usuario
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    expirationDate: {
        type: Date,
        default: () => new Date(+new Date() + 10 * 1000) // Expire en 10 segundos
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Actualización de la fecha de expiración antes de guardar el carrito
cartSchema.pre('save', function(next) {
    if (this.isNew) {
        this.expirationDate = new Date(+new Date() + 10 * 1000); // Expire en 10 segundos
    }
    next();
});

export const Cart = model("Cart", cartSchema);
