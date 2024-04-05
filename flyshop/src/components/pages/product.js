import React, { useContext, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import Footer from "../common/footer";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { PiHeartDuotone } from "react-icons/pi";
import Productdetail from "../../productdetail";
import "../../css/product.css";

const Product = ({
    setProduct,
    detail,
    view,
    close,
    addtofavorite,
    setClose,
    addtocart,
}) => {
    const { loginWithRedirect, isAuthenticated } = useAuth();
    const [selectedValue, setSelectedValue] = useState('');

    const { addProductToCart } = useContext(CartContext);

    const { products } = useContext(ProductContext);
    const navigate = useNavigate();
    const handleProductClick = (product) => {
        navigate(`/product/${product._id}`);
    };

    const filtterproduct = (product) => {
        setSelectedValue(product);
        const update = products.filter((x) => {
            return x.brand === product;
        });
        setProduct(update);
    };

    const addToCart = (_id) => {
        addProductToCart(_id);
    };

    return (
        <>
            {close ? (
                <div className='product_detail'>
                    <div className='container'>
                        <button onClick={() => setClose(false)} className='closebtn'><IoMdClose /></button>
                        {detail.map((object) => {
                            const imageUrl = object.images && object.images[0];
                            return (
                                <div key={object._id} className='productbox'>
                                    <div className='img-box'>
                                        {imageUrl ? (
                                            <img src={imageUrl} alt={object.title} />
                                        ) : (
                                            <p>No image available</p>
                                        )}
                                    </div>
                                    <div className='detail'>
                                        <h4>{object.brand}</h4>
                                        <h2>{object.title}</h2>
                                        <p>{object.description}</p>
                                        <h3>$ {object.price} COP </h3>
                                        <strong >Talla</strong><p>{object.size}</p>
                                        <button id='button-detail' onClick={() => addToCart(object._id)}>Añadir al carrito</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}
            <div className="products">
                <div className='product'>
                    <div className="cart-container">
                        {products.map((object) => {
                            const imageUrl = object.images && object.images[0];
                            return (
                                <div className="item" key={object._id}>
                                    <div className="img-box">
                                        <PiHeartDuotone
                                            id='heart-icon'
                                            onClick={
                                                isAuthenticated
                                                    ? () => addtofavorite(object)
                                                    : () => loginWithRedirect()
                                            }
                                        />
                                        <IoEyeOutline
                                            id='eye-icon'
                                            onClick={() => view(object)}
                                        />
                                        {imageUrl ? (
                                            <img src={imageUrl} alt={object.title} />
                                        ) : (
                                            <p>No image available</p>
                                        )}
                                    </div>
                                    <div className="details">
                                        <h2 onClick={() => handleProductClick(object)}>
                                            {object.title}
                                            <br />
                                            <div className="price">${object.price}</div>
                                            <span>{object.brand}</span>
                                        </h2>
                                        <label>Tallas</label>
                                        <ul>
                                            <li>{object.size}</li>
                                        </ul>
                                        <button
                                            onClick={
                                                isAuthenticated
                                                    ? () => addToCart(object._id)
                                                    : () => loginWithRedirect()
                                            }
                                        >
                                            Añadir al carrito
                                        </button>
                                        <div className='icons-detail'>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;
