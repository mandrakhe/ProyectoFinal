/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { FaArrowLeft } from "react-icons/fa";

import '../../css/addProduct.css'
import { Link } from 'react-router-dom';
const AddProduct = () => {
    const { createNewProduct } = useContext(ProductContext);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        brand: '',
        description: '',
        size: '',
        images: []
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
            images: [...formData.images, e.target.files[0]]
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

        formData.images.forEach(image => {
            data.append('image', image);
        });

        createNewProduct(data);
        // Limpiar el formulario después de enviar
        setFormData({
            title: '',
            price: '',
            brand: '',
            description: '',
            size: '',
            images: []
        });
    };

    return (
        <div className='add-product-container'>

            <div className='add-product'>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h2>Agregar Nuevo  Producto</h2>
                    <input type="file" name="image" onChange={handleImageChange} required multiple />
                    <input type="text" name="title" placeholder="Titulo" value={formData.title} onChange={handleChange} required />
                    <input type="number" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} required />
                    <input type="text" name="brand" placeholder="Marca" value={formData.brand} onChange={handleChange} required />
                    <input type="text" name="description" placeholder="Descripcion" value={formData.description} onChange={handleChange} required />
                    <input type="text" name="size" placeholder="Talla" value={formData.size} onChange={handleChange} required />
                <button type="submit">Añadir Producto</button>
                </form>
            </div>
            <div className='image-view'>
                {formData.images.map((image, index) => (
                    <img key={index} src={URL.createObjectURL(image)} alt={`image-${index}`} />
                    ))}
            </div>
<div className='container-image '>
    
<div className='detail-view'>
                <h2>Visualización del nuevo  producto</h2>
                <form onSubmit={handleSubmit}>
                    <h3>Título </h3><p>{formData.title}</p>
                    <h4>Precio </h4><p>{formData.price}</p>
                    <h5>Talla</h5><p>{formData.size}</p>
                    <h5>Marcas </h5><p>{formData.brand}</p>
                    <h5>Descripción </h5> <p  className='description' >{formData.description}</p>
                    <Link to="/"><FaArrowLeft /></Link>
                </form>
            </div>
</div>
        </div>
        // ghg
    );
};

export default AddProduct;