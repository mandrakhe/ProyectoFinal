import mongoose from "mongoose";
const { Schema, model } = mongoose;

const OrderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true // Asegura que cada orden tenga un usuario asociado
    },
    email: String,
    departamento: String,
    ciudad: String,
    nombre: String,
    direccion: String,
    metodoPago: String,
    direccionEnvio: String,
    total: String,
    estadoPago: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    cart: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product',
                required: true },
            quantity: Number
        }
    ]
});

export const Order = model('Order', OrderSchema);
