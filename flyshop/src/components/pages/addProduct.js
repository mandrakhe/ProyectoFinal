import React, { useState, useContext } from 'react';
import '../../css/addProduct.css'
import { MdOutlineUploadFile } from "react-icons/md";
import { ProductContext } from '../../context/ProductContext'; // Importa el contexto de productos

function AddProduct() { 
  const { createNewProduct } = useContext(ProductContext); // Obtén la función createNewProduct del contexto de productos
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({
    title: '',
    price: '',
    brand: '',
    description: '',
    sizes: '',
  });
  const [previewImage, setPreviewImage] = useState(null); // Estado para la imagen de previsualización

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]; // Solo tomamos la primera imagen seleccionada
    setImages([selectedImage]); // Almacenamos la imagen en el estado de imágenes
    setPreviewImage(URL.createObjectURL(selectedImage)); // Establecemos la URL de previsualización de la imagen
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('price', product.price);
    formData.append('brand', product.brand);
    formData.append('description', product.description);
    formData.append('sizes', product.sizes);
    images.forEach((image, index) => {
      formData.append(`image${index}`, image);
    });
    createNewProduct(formData); // Llama a la función createNewProduct con los datos del formulario
    // Restablece el estado del formulario después de enviar
    setImages([]);
    setPreviewImage(null); // Limpiamos la previsualización de la imagen
    setProduct({
      title: '',
      price: '',
      brand: '',
      description: '',
      sizes: '',
    });
  };

  return (
    <div className="addproduct-container">
      <h1>Agregar producto</h1>
      <div className="addproduct">
        <div className='container-preview'>
          <div className='imagen'>
            <h3><MdOutlineUploadFile /></h3>
            <h1>Añadir imagen</h1>
            <input type='file' multiple onChange={handleImageChange} />
            <div className='image-preview'>
              {/* Mostrar la imagen de previsualización si está disponible */}
             
            </div>
          </div>
          <div className='detail-product'>
            <input type="text" id="title" name="title" value={product.title} onChange={handleInputChange} placeholder='Título del producto' />
            <input type="number" id="price" name="price" value={product.price} onChange={handleInputChange} placeholder='Precio del producto' />
            <input type="text" id="brand" name="brand" value={product.brand} onChange={handleInputChange} placeholder='Marca del producto' />
            <textarea id="description" name="description" value={product.description} onChange={handleInputChange} placeholder='Una breve descripción del producto'></textarea>
            <input type="text" id="sizes" name="sizes" value={product.sizes} onChange={handleInputChange} placeholder='Tallas disponibles' />
          </div>
        </div>
        <div className='imagen-view'>
          <h3><MdOutlineUploadFile /></h3>
          {previewImage && <img src={previewImage} alt="Preview" / >}
          <div className='image-preview'></div>
        </div>
        <form onSubmit={handleSubmit}> {/* Agrega onSubmit para manejar el envío del formulario */}
          <div className='detail-view'>
            <h3>Título </h3><p>{product.title}</p>
            <h4>Precio </h4><p>{product.price}</p>
            <h5>Talla</h5><p>{product.sizes}</p> 
            <h5>Marcas </h5><p>{product.brand}</p>
            <h5>Descripción </h5> <p>{product.description}</p>
            <button type='submit'>Subir</button> {/* Agrega un botón para enviar el formulario */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct;
