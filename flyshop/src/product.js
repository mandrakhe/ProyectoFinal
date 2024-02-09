import React from 'react'
import Productdetail from './productdetail'
import { CiShoppingCart  } from "react-icons/ci";
import { GoEye    } from "react-icons/go";
import { IoMdHeartEmpty  } from "react-icons/io";
import './product.css'
const Product = ({product,setProduct}) => {

    const filtterproduct =(product) =>
    {
        const update = Productdetail.filter((x) =>
        {
            return x.Cat===product;
        }
        )
        setProduct(update)
    }
    const  AllProducts = () =>
    {
        setProduct(Productdetail)
    }
  return (
    <> 
        <div className='products'>
        <h2># Products</h2>
        <p>Home . products</p> 
            <div className='container'>
                <div className='filter'>
                    <div className='categories'>
                        <h3>Categories</h3>
                        <ul>
                            <li onClick={()=>AllProducts()} > All products</li>
                            <li onClick={()=>filtterproduct("Tablet")} > Tablet</li>
                            <li onClick={()=>filtterproduct("Smart watch")} > Smart watch </li>
                            <li onClick={()=>filtterproduct("Headphne")} > Headphne</li>
                            <li onClick={()=>filtterproduct("Camera")} > Camera</li>
                            <li onClick={()=>filtterproduct("Gaming")} > Gaming </li>
                        </ul>
                    </div>
                    <div className='container'>
                        <div className='productbox'>
                            <div className='contant'>
                                {
                                    product.map((curElm)=>
                                    {
                                       return(
                                        <>
                                        
                                             <div className='box' key={curElm.id}>
                                              <div className='img_box'>
                                                  <img src={curElm.Img} alt={curElm.Name}></img>
                                                 <div className='icon'>
                                                    <li> <CiShoppingCart /></li>
                                                   <li><GoEye /></li>
                                                  <li><IoMdHeartEmpty /></li>

                    
                                                 </div>
                                               </div>
                                               <div className='detail'>
                                                 <h3>{curElm.Name}</h3>
                                                 <p>{curElm.Brand}</p>
                                                 <p>{curElm.Price}</p>
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
        </div>
    </>
  )
}

export default Product
