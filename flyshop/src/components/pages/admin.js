import React from 'react'
import Productdetail from '../../productdetail';
import '../../css/admin.css'
// import Cart from './cart';

function Admin() {

  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
        return x.Brand === product;
    });
    product(update);
};
  return (
    <>
                <h1>Publicaciones recientes</h1>
                    <div className="filters">
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
                                <option value="all">Fecha</option>
                                <option value="Jordan">Hoy</option>
                                <option value="Adidas">Ultimos 7 días</option>
                                <option value="New Balanse">Este mes</option>
                            </select>
                        </div>
                        <div className="filter">
                            <select className="filterSelect" onChange={(e) => filtterproduct(e.target.value)}>
                                <option value="all">Modelo</option>
                                <option value="Jordan">Altos</option>
                                <option value="Jordan">Enanos</option>
                                <option value="Adidas">Gordos</option>
                                <option value="New Balanse">Bajitos</option>
                            </select>
                        </div>
                        <div className="filter">
                            <select className="filterSelect" onChange={(e) => filtterproduct(e.target.value)}>
                                <option value="all">Precio</option>
                                <option value="Jordan">de 90.000</option>
                                <option value="Adidas">100.000 - 300.000</option>
                                <option value="New Balanse">400.000 - 900.000</option>
                                <option value="New Balanse">1.000.000 +</option>
                            </select>
                        </div>
                       
                    </div>


    </>
  )
}

export default Admin