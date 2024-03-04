import React, { useState } from 'react';
import '../../css/addProduct.css';
import { MdOutlineUploadFile } from "react-icons/md";


function AddProduct() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages(e.target.files.slice(0, 10));
  };
  return (
    <>
    <div className='vista-previa'>
      <h1>VISTA PREVIA PRODUCTO</h1>
    </div>
    <div className='agregar-producto'>
      <div className='agregar-imagenes'>
        <div className='imagen'>
          <h3><MdOutlineUploadFile /></h3>
          <h1>Añadir imagenes</h1>
          <h2>Minimo 1 máximo 10 imagenes</h2>
          <input type='file' multiple onChange={handleImageChange} />
          <div className='image-preview'>
            {images.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt={`preview-${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className='descripciones'>
        <h1>Titulo</h1>
        <h1>Precio</h1>
        <h1>Marca</h1>
        <h1>Descripcion</h1>
        <h1>Tallas</h1>
      </div>
    </div>
    <div className='vista-previa'>
      <div className='vista-publicacion'>
        <h2>vista previa de la publicacion</h2>
        <h3>Cuando crees una publicación, tendrás 
          la oportunidad de visualizar cómo lucirá antes de compartirla con otros.</h3>
      </div>
    </div>
  </>
  )
}

export default AddProduct