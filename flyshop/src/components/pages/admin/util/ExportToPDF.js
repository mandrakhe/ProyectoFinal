import React, { useState, useContext } from 'react';
import { ProductContext } from '../../../../context/ProductContext';
import jsPDF from 'jspdf'; // Import jsPDF

export const ExportToPDF = ( ) => {
    const [loading, setLoading] = useState(false);
    const { products } = useContext(ProductContext);

    const exportToPDF = () => {
        setLoading(true);

        const doc = new jsPDF();
        doc.text('Publicaciones', 15, 15); 

        let y = 30; 
        {products.map((object) => {
            const imageUrl = object.images && object.images[0];
            const title = object.title;
            const price = object.price;
            const createdAt = object.createdAt;

            doc.addImage(imageUrl, 'JPEG', 15, y, 50, 50);
            doc.text(`Producto: ${title}`, 15, y);
            y += 10;
            doc.text(`Precio: ${price}`, 15, y);
            y += 10;
            doc.text(`Añadido el: ${createdAt}`, 15, y);
            y += 15; 
        });
        doc.save('Stock_Products.pdf'); 
        setLoading(false);
        };
        }
    return (
        <button
            className="export_button_pdf"
            onClick={exportToPDF}
            disabled={loading}
        >
            {loading ? 'Exportando...' : 'Exportar a PDF'}
        </button>
    );
};
