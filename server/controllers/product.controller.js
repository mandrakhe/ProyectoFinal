import multer from "multer";
import { uploadFile } from "../util/uploadFile.js";
import { Product } from "../models/product.models.js";

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
    try {
        const uploadFields = upload.fields([{ name: "image", maxCount: 10 }]);

        uploadFields(req, res, async (error) => {
            if (error) {
                return res.status(400).json({ message: error.message });
            }

            const body = req.body;
            const images = req.files.image;

            if (!images || images.length === 0) {
                return res.status(400).json({ message: "Debes enviar al menos una imagen" });
            }

            const promises = images.map(async (image) => {
                const { downloadURL } = await uploadFile(image);
                return downloadURL;
            });

            const imageUrls = await Promise.all(promises);

            const newProduct = await Product.create({
                title: body.title,
                price: body.price,
                brand: body.brand,
                description: body.description,
                size: body.size,
                images: imageUrls,
            });

            return res.status(200).json({ newProduct });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const products = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json({ products });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Ocurrió un error al obtener los productos" });
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

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

export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        const uploadFields = upload.fields([{ name: "image", maxCount: 10 }]);

        uploadFields(req, res, async (error) => {
            if (error) {
                return res.status(400).json({ message: error.message });
            }

            const images = req.files?.image;
            let imageUrls = [];

            if (images && images.length > 0) {
                const promises = images.map(async (image) => {
                    const { downloadURL } = await uploadFile(image);
                    return downloadURL;
                });

                const newImageUrls = await Promise.all(promises);
                imageUrls = newImageUrls;
            }

            // Actualizar los campos del producto
            if (req.body.title) {
                updatedProduct.title = req.body.title;
            }
            if (req.body.brand) {
                updatedProduct.brand = req.body.brand;
            }
            if (req.body.description) {
                updatedProduct.description = req.body.description;
            }
            if (req.body.price) {
                updatedProduct.price = req.body.price;
            }
            if (req.body.size) {
                updatedProduct.size = req.body.size;
            }

            // Actualizar las imágenes del producto
            updatedProduct.images = imageUrls;
            await updatedProduct.save();

            //console.log("Producto actualizado:", updatedProduct);
            return res.status(200).json({ updatedProduct });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al actualizar el producto" });
    }
};




