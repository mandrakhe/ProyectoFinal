import React from 'react';
import '../../css/addProduct.css';
import { MdOutlineUploadFile } from "react-icons/md";


function AddProduct() {
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