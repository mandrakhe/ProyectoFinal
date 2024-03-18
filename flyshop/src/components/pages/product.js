import { GoEye } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { ProductContext } from '../../context/ProductContext'
import React from "react";
import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "../../css/product.css";
import Footer from './../common/footer';
import Productdetail from "../../productdetail";
const Product = ({
    product,
    setProduct,
    detail,
    view,
    close,
    setClose,
    addtocart,
}) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [selectedValue, setSelectedValue] = useState('');
    const { products } = useContext(ProductContext);

    const filtterproduct = (product) => {
        setSelectedValue(product);
        const update = Productdetail.filter((x) => {
            return x.Brand === product;
        });
        setProduct(update);
    };

    return (
        <>
            {close ? (
                <div className="product_detail">
                    <div className="container">
                        <button onClick={() => setClose(false)} className="closebtn">
                            <IoMdClose />
                        </button>
                        {detail.map((object) => {
                                const imageUrl = object.images && object.images[0];
                            return (
                                <div className="productbox">
                                    <div className="img-box">
                                    
                                    {imageUrl ? ( // Conditionally render the image if a URL exists
                                                    <img src={imageUrl} alt={object.title} />
                                                ) : (
                                                    <p>No image available</p> // Display a placeholder if no image URL is found
                                                )}
                                    </div>
                                    <div className="detail">
                                        <h4>{object.brand}</h4>
                                        <h2>{object.name}</h2>
                                        <p>
                                            Texto pero una cantidad exagerada de texto o sea en plan
                                            mucho pero mucho texto sin el más minimo sentido aparente
                                            pero igual ya veremos
                                        </p>
                                        <h3>{object.Price}</h3>
                                        <h3>Talla</h3>
                                        <button onClick={() => addtocart(object)}>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="productbox"></div>
                    </div>
                </div>
            ) : null}

            <div className="products">
                <h2>{selectedValue}(Resultados)</h2>
                <div className="filters">
                    <h1>Filtrar: </h1>
                    <div className="filter">
                        <select className="filterSelect" onChange={(e) => filtterproduct(e.target.value)}>
                            <option value="Todos">Marcas</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Adidas">Adidas</option>
                            <option value="New Balanse">New balanse</option>
                        </select>
                    </div>
                    <div className="filter">
                        <select className="filterSelect" onChange={(e) => filtterproduct(e.target.value)}>
                            <option value="all">Precio</option>
                            <option value="Jordan">Menor a mayor</option>
                            <option value="Adidas">Mayor a menor</option>
                            <option value="New Balanse">De 1.000.000  +</option>
                        </select>
                    </div>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="productbox">
                            <div className="contant">
                                {products.map((object) => {
                                    const imageUrl = object.images && object.images[0];
                                    return (

                                        <div className='box' key={object.id}>
                                            {/* <img src='./assets/images/zapatos/campus.png' alt='prueba' /> */}
                                            <div className='img_box'>


                                                {imageUrl ? ( // Conditionally render the image if a URL exists
                                                    <img src={imageUrl} alt={object.title} />
                                                ) : (
                                                    <p>No image available</p> // Display a placeholder if no image URL is found
                                                )}
                                                <div className='icon'>
                                                    <li onClick={() => view(object)}><GoEye /></li>
                                                    <li ><IoMdHeartEmpty /></li>
                                                </div>
                                            </div>
                                            <div className='detail'>
                                                <h3>{object.title}</h3>
                                                <p>{object.brand}</p>
                                                <p>{object.price}</p>
                                                <button className="button-product"
                                                    onClick={
                                                        isAuthenticated
                                                            ? () => addtocart(object)
                                                            : () => loginWithRedirect()
                                                    }
                                                >
                                                    Añadir al carrito
                                                </button>
                                            </div>
                                        </div>

                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;