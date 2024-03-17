import React, { useContext } from 'react';
import { ExportToExcel } from '../../util/ExportToExcel';
import { ProductContext } from '../../context/ProductContext';

function ProductList() {
    const { products, loading, error } = useContext(ProductContext);


    return (
        <div className="App">
            {loading && <p>Loading products...</p>}
            {error && <p>Error: {error.message}</p>}
            {products && (
                <ExportToExcel apiData={products} fileName="Stock_Products" />
            )}
        </div>
    );
}

export default ProductList;
