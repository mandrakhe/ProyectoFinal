import React from 'react'
import Productdetail from '../../productdetail'
import { CiShoppingCart } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import '../../css/product.css'
const Product = ({ product, setProduct, detail, view, close, setClose, addtocart}) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const filtterproduct = (product) => {
        const update = Productdetail.filter((x) => {
            return x.Brand === product;
        }
        )
        setProduct(update)
    }
    const AllProducts = () => {
        setProduct(Productdetail)
    }
    return (
        <>
        {
            close ?
            <div className='product_detail'>
                <div className='container'>
                    <button onClick={() => setClose(false)} className='closebtn'><IoMdClose /></button>
                    {
                        detail.map((curElm)=>
                        {
                            return(
                                <div className='productbox'>
                                    <div className='img-box'>
                                        <img src={curElm.Img} alt={curElm.Name}></img>
                                    </div>
                                    <div className='detail'>
                                        <h4>{curElm.Brand}</h4>
                                        <h2>{curElm.Name}</h2>
                                        <p>Texto pero una cantidad exagerada de texto o sea en plan mucho pero mucho texto sin el más minimo sentido aparente pero igual ya veremos</p>
                                        <h3>{curElm.Price}</h3>
                                        <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                <div className='productbox'></div>
                </div>
            </div> : null
        }


            <div className='products'>
                <h2># Zapatos</h2>
                <p>Home . products</p>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={() => AllProducts()} > All products</li>
                                <li onClick={() => filtterproduct("Jordan")} > Jordan</li>
                                <li onClick={() => filtterproduct("Smart watch")} > Smart watch </li>
                                <li onClick={() => filtterproduct("Headphne")} > Headphne</li>
                                <li onClick={() => filtterproduct("Camera")} > Camera</li>
                                <li onClick={() => filtterproduct("Gaming")} > Gaming </li>
                            </ul>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='productbox'>
                            <div className='contant'>
                                {
                                    product.map((curElm) => {
                                        return (
                                            <>
                                                <div className='box' key={curElm.id}>
                                                    <div className='img_box'>
                                                        <img src={curElm.Img} alt={curElm.Name}></img>
                                                        <div className='icon'>
                                                            {
                                                                isAuthenticated ?
                                                                <li onClick={() => addtocart(curElm)}> <CiShoppingCart /></li>
                                                                :
                                                                <li onClick={() => loginWithRedirect()}> <CiShoppingCart /></li>
                                                            }
                                                            <li onClick={() => view(curElm)}><GoEye /></li>
                                                            <li><IoMdHeartEmpty /></li>
                                                        </div>
                                                    </div>
                                                    <div className='detail'>
                                                        <h3>{curElm.Name}</h3>
                                                        <p>{curElm.Brand}</p>
                                                        <p>COP {curElm.Price}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
