import multer from "multer";
import { uploadFile } from "../util/uploadFile.js";
import { Product } from "../models/product.models.js"

const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Solo se permiten imágenes"), false);
    }
};

const upload = multer({ storage, fileFilter });

export const createProduct = async (req, res) => {
    const uploadFields = upload.fields([{ name: "image", maxCount: 10 }]);

    uploadFields(req, res, async (error) => {
        if (error) {
            return res.status(400).json({ message: error.message });
        }

        const body = req.body;
        const images = req.files.image;

        if (images && images.length > 0) {
            const promises = images.map(async (image) => {
                const { downloadURL } = await uploadFile(image);
                return downloadURL;
            });

            const imageUrls = await Promise.all(promises);

            const newProduct = await Product({
                title: body.title,
                price: body.price,
                brand: body.brand,
                description: body.description,
                size: body.size,
                images: imageUrls,
            }).save();

            return res.status(200).json({ newProduct });
        }

        return res.status(400).json({ message: "Debes enviar al menos una imagen" });
    });
};

export const products = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json({ products });
    } catch (error) {
        res.status(400).json({ message: "Ocurrió un error:", error });
    }
};

export const getProduct = async(req, res) =>{
    const product = await Product.findById(req.params.id);
    if(!product) return res.status(404).json({ message: 'Producto no encontrado' })
    res.status(200).json(product);
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        return res.status(204).json(); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al eliminar el producto" }); 
    }
};
