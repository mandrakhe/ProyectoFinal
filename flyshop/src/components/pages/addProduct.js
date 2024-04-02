import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';

const AddProduct = () => {
    const { createNewProduct } = useContext(ProductContext);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        brand: '',
        description: '',
        size: '',
        image: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('price', formData.price);
        data.append('brand', formData.brand);
        data.append('description', formData.description);
        data.append('size', formData.size);
        data.append('image', formData.image);

        createNewProduct(data);
        // Limpiar el formulario después de enviar
        setFormData({
            title: '',
            price: '',
            brand: '',
            description: '',
            size: '',
            image: null
        });
    };

    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" name="title" placeholder="Titulo" value={formData.title} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} required />
                <input type="text" name="brand" placeholder="Marca" value={formData.brand} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Descripcion" value={formData.description} onChange={handleChange} required />
                <input type="text" name="size" placeholder="Talla" value={formData.size} onChange={handleChange} required />
                <input type="file" name="image" onChange={handleImageChange} required />
                <button type="submit">Añadir Producto</button>
            </form>
        </div>
    );
};

export default AddProduct;
