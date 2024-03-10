// // import React, { useState } from 'react';
// import '../../css/addProduct.css';
// import { title, price, brand, size, image, images, description } from 'product.controller.js';
// import { MdOutlineUploadFile } from "react-icons/md";

// function AddProduct() {
//   // const [ setImages] = useState([]);
//   // const [product, setProduct] = useState({
//   //   title: '',
//   //   price: '',
//   //   brand: '',
//   //   description: '',
//   //   sizes: '',
//   // });

//   const handleInputChange = (e) => {
//     image({
    
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImageChange = (e) => {
// images(e.target.files.slice(0, 10));
//   };

//   return (
//     <>
//       <div className="addproduct-container">
//           <h1>Agregar producto</h1>
//         <div className="addproduct">
//           <div className='imagen'>
//             <h3><MdOutlineUploadFile /></h3>
//             <h1>Añadir imagenes</h1>
//             <h2>Minimo 1 máximo 5 imagenes</h2>
//             <input type='file' multiple onChange={handleImageChange} />
//             <div className='image-preview'>
//               {image.map((image, index) => (
//                 <img key={index} src={URL.createObjectURL(image)} alt={`preview-${index}`} />
//               ))}
//             </div>
//           </div>
//           <div className='imagen-view'>
//             <h3><MdOutlineUploadFile /></h3>
//             <h1>Previsualización de la imagen</h1>
//             <div className='image-preview'>
//             </div>
//           </div>
//         </div>
//         <div className='detail-product'>
//             <input type="text" id="title" name="title" value={title} onChange={handleInputChange} placeholder='Título del producto' />
//             <input type="number" id="price" name="price" value={price} onChange={handleInputChange} placeholder='Precio del producto' />
//             <input type="text" id="brand" name="brand" value={brand} onChange={handleInputChange} placeholder='Marca del procuto' />
//             <textarea id="description" name="description" value={description} onChange={handleInputChange} placeholder='Una breve descripción del produto'></textarea>
//             <input type="text" id="sizes" name="sizes" value={size} onChange={handleInputChange} placeholder='Tallas disponibles' />
//           </div>
//       </div>
//     </>
//   )
// }

// export default AddProduct