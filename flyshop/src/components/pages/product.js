import React from "react";
import Productdetail from "../../productdetail";
// import { CiShoppingCart } from "react-icons/ci"
import { GoEye } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import "../../css/product.css";
import Footer from './../common/footer';

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

    const filtterproduct = (product) => {
        const update = Productdetail.filter((x) => {
            return x.Brand === product;
        });
        setProduct(update);
    };
    // const AllProducts = () => {
    //     setProduct(Productdetail);
    // };
    return (
        <>
            {close ? (
                <div className="product_detail">
                    <div className="container">
                        <button onClick={() => setClose(false)} className="closebtn">
                            <IoMdClose />
                        </button>
                        {detail.map((curElm) => {
                            return (
                                <div className="productbox">
                                    <div className="img-box">
                                        <img src={curElm.Img} alt={curElm.Name}></img>
                                    </div>
                                    <div className="detail">
                                        <h4>{curElm.Brand}</h4>
                                        <h2>{curElm.Name}</h2>
                                        <p>
                                            Texto pero una cantidad exagerada de texto o sea en plan
                                            mucho pero mucho texto sin el más minimo sentido aparente
                                            pero igual ya veremos
                                        </p>
                                        <h3>{curElm.Price}</h3>
                                        <h3>Talla</h3>
                                        <button onClick={() => addtocart(curElm)}>
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
                <h2>(Resultados)</h2>
                <div className="filters">
                    <h1>Filtrar: </h1>
                        <div className="filter">
                            <select className="filterSelect" onChange={(e) => filtterproduct(e.target.value)}>
                                <option value="all">Marcas</option>
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
                        <div className="filter">
                            <select className="filterSelect" onChange={(e) => filtterproduct(e.target.value)}>
                                <option value="all">Hombre</option>
                                <option value="Jordan">Altos</option>
                                <option value="Jordan">Enanos</option>
                                <option value="Adidas">Gordos</option>
                                <option value="New Balanse">Bajitos</option>
                            </select>
                        </div>
                        <div className="filter">
                            <select className="filterSelect" onChange={(e) => filtterproduct(e.target.value)}>
                                <option value="all">Mujer</option>
                                <option value="Jordan">Altas</option>
                                <option value="Adidas">Enanas</option>
                                <option value="New Balanse">Gordas</option>
                                <option value="New Balanse">Flacas</option>
                            </select>
                        </div>
                        <div className="filter">
                            <select className="filterSelect" onChange={(e) => filtterproduct(e.target.value)}>
                                <option value="all">Niños</option>
                                <option value="Jordan">Altas</option>
                                <option value="Adidas">Enanas</option>
                                <option value="New Balanse">Gordas</option>
                                <option value="New Balanse">Flacas</option>
                            </select>
                        </div>
                    </div>
                <div className="container">
                    <div className="container">
                        <div className="productbox">
                            <div className="contant">
                                {product.map((curElm) => {
                                    
                                    return (

                                        <div className='box' key={curElm.id}>
                                            {/* <img src='./assets/images/zapatos/campus.png' alt='prueba' /> */}
                                            <div className='img_box'>

                                                <img src={curElm.Img} alt={curElm.Name} />
                                                <div className='icon'>
                                                    <li onClick={() => view(curElm)}><GoEye /></li>
                                                    <li ><IoMdHeartEmpty /></li>
                                                </div>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>{curElm.Brand}</p>
                                                <p>{curElm.Price}</p>
                                                <button className="button-product"
                                                    onClick={
                                                        isAuthenticated
                                                            ? () => addtocart(curElm)
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
            <Footer/>
        </>
    );
};

export default Product;
