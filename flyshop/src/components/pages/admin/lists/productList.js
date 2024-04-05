import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductContext } from '../../../../context/ProductContext';
import '../adminCSS/lists.css';
import { ExportToExcel } from '../util/ExportToExcel';
import { ExportToPDF } from '../util/ExportToPDF';

function ProductList() {
    const { products, loading, error, handleDeleteProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleEditProduct = (productId) => {
        navigate(`/admin/edit-product/${productId}`);
    };

    const handleDeleteProductWithAlert = (productId) => {
        if (window.confirm('¿ Está seguro de que queire eliminar el producto ?')) {
            handleDeleteProduct(productId);
            toast.success('Producto eliminado');
        }
    };

    return (
        <>
            <h1 className='publicaciones'>Publicaciones recientes</h1>
            <div className="export">
                {loading && <p>Loading products...</p>}
                {error && <p>Error: {error.message}</p>}
                {products && (
                    <ExportToExcel apiData={products} fileName="Stock_Products" />
                )}
                <ExportToPDF/>
            </div>
            <div className='container_list'>
                {products.map((object) => {
                    const imageUrl = object.images && object.images[0];

                    return (
                        <div className='list_product' key={object._id}>
                            <div className='list_img'>
                                {imageUrl? (
                                    <img src={imageUrl} alt={object.title} />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                            <div className='list_detail'>
                                <h4>Añadido el: {object.createdAt}</h4>
                                <h2>Producto: {object.title}</h2>
                                <h3>Precio: {object.price}</h3>
                            </div>
                            <div className='actions actions_effects'>
                                <button onClick={() => handleDeleteProductWithAlert(object._id)}>Eliminar</button>
                                <button onClick={() => handleEditProduct(object._id)}>Editar</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ToastContainer />
        </>
    );
}

export default ProductList;
