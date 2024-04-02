import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../../../context/ProductContext';

const EditProduct = () => {
    const { id } = useParams();
    const { fetchProduct, currentProduct, updateProduct } = useContext(ProductContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        brand: '',
        description: '',
        size: '',
        image: null
    });

    useEffect(() => {
        fetchProduct(id);
      }, [id]);

    useEffect(() => {
        if (currentProduct) {
            setFormData({
                title: currentProduct.title,
                price: currentProduct.price,
                brand: currentProduct.brand,
                description: currentProduct.description,
                size: currentProduct.size,
                // image: currentProduct.image // Si deseas mantener la imagen existente
            });
        }
    }, [currentProduct]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('price', formData.price);
        data.append('brand', formData.brand);
        data.append('description', formData.description);
        data.append('size', formData.size);
        if (formData.image) {
            data.append('image', formData.image);
        }

        await updateProduct(id, data); // Actualiza el producto
        navigate(`/admin/listProducts`);
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
                <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
                <input type="text" name="size" placeholder="Size" value={formData.size} onChange={handleChange} required />
                <input type="file" name="image" onChange={handleImageChange} />
                <button type="submit">Actualizar producto</button>
            </form>
        </div>
    );
};

export default EditProduct;