import React, { useContext } from 'react';
import { ExportToExcel } from '../../../util/ExportToExcel';
import { ProductContext } from '../../../context/ProductContext';

import './adminCSS/productList.css';

function ProductList() {
    const { products, loading, error } = useContext(ProductContext);

    return (
        <>
            <h1 className='publicaciones'>Publicaciones recientes</h1>
            <div className="export">
                {loading && <p>Loading products...</p>}
                {error && <p>Error: {error.message}</p>}
                {products && (
                    <ExportToExcel apiData={products} fileName="Stock_Products" />
                )}
            </div>
            <div className='container_list'>
                {products.map((object) => {
                    const imageUrl = object.images && object.images[0]; // Access the first image URL from the "images" array

                    return (
                        <div className='list_product' key={object.id}>
                            <div className='list_img'>
                                {imageUrl ? ( // Conditionally render the image if a URL exists
                                    <img src={imageUrl} alt={object.title} />
                                ) : (
                                    <p>No image available</p> // Display a placeholder if no image URL is found
                                )}
                            </div>
                            <div className='list_detail'>
                                <h4>Añadido el: {object.createdAt}</h4>
                                <h2>Producto: {object.title}</h2>
                                <h3>Precio: {object.price}</h3>
                            </div>
                        </div>
                    );
                })}
            </div> asics
        </>
    );
}

export default ProductList;
