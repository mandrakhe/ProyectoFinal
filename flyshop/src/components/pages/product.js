import { GoEye } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import React, { useContext, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";
import Footer from "../common/footer";
import Productdetail from "../../productdetail";
import "../../css/product.css";

const Product = ({
    setProduct,
    detail,
    view,
    close,
    setClose,
    addtocart,
}) => {
    const { loginWithRedirect, isAuthenticated } = useAuth();
    const [selectedValue, setSelectedValue] = useState('');
    const { products } = useContext(ProductContext);
    const { addProductToCart } = useContext(CartContext);

    const filtterproduct = (product) => {
        setSelectedValue(product);
        const update = Productdetail.filter((x) => {
            return x.Brand === product;
        });
        setProduct(update);
    };

    const addToCart = (_id) => {
        addProductToCart(_id);
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
                                        {imageUrl ? ( // Renderización condicional de la imagen si existe una URL
                                            <img src={imageUrl} alt={object.title} />
                                        ) : (
                                            <p>No hay imagen disponible</p> // Mostrar un marcador de posición si no se encuentra una URL de imagen
                                        )}
                                    </div>
                                    <div className="detail">
                                        <h4>{object.brand}</h4>
                                        <h2>{object.name}</h2>
                                        <p>
                                            Texto pero una cantidad exagerada de texto o sea en plan
                                            mucho pero mucho texto sin el más mínimo sentido
                                            aparente pero igual ya veremos
                                        </p>
                                        <h3>{object.price}</h3>
                                        <h3>Talla</h3>
                                        <button onClick={() => addtocart(object)}>
                                            Añadir al carrito
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
                        <select
                            className="filterSelect"
                            onChange={(e) => filtterproduct(e.target.value)}
                        >
                            <option value="Todos">Marcas</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Adidas">Adidas</option>
                            <option value="New Balanse">New balanse</option>
                        </select>
                    </div>
                    <div className="filter">
                        <select
                            className="filterSelect"
                            onChange={(e) => filtterproduct(e.target.value)}
                        >
                            <option value="all">Precio</option>
                            <option value="Jordan">Menor a mayor</option>
                            <option value="Adidas">Mayor a menor</option>
                            <option value="New Balanse">De 1.000.000 +</option>
                        </select>
                    </div>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="productbox">
                            <div className="contant">
                                {products.map((product) => {
                                    const imageUrl = product.images && product.images[0];
                                    return (
                                        <div className="box" key={product.id}>
                                            <div className="img_box">
                                                {imageUrl ? ( // Renderización condicional de la imagen si existe una URL
                                                    <img src={imageUrl} alt={product.title} />
                                                ) : (
                                                    <p>No hay imagen disponible</p> // Mostrar un marcador de posición si no se encuentra una URL de imagen
                                                )}
                                                <div className="icon">
                                                    <li onClick={() => view(product)}>
                                                        <GoEye />
                                                    </li>
                                                    <li>
                                                        <IoMdHeartEmpty />
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <h3>{product.title}</h3>
                                                <p>{product.brand}</p>
                                                <p>{product.price}</p>
                                                <button
                                                    className="button-product"
                                                    onClick={
                                                        isAuthenticated
                                                            ? () => addToCart(product._id)
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
