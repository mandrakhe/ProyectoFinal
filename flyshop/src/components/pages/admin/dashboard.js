import { Link } from 'react-router-dom';
import { FaPager } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa";
import '../admin/adminCSS/dashBoard.css'
function Admin() {


  return (
    <>
    <div className='admin_panel'> 
    <h1>Bienvenido al Panel de Administración</h1>
      <div className='dashboard'>
        <div className='admin_links'>
        <div className='lists'>
          <Link to="/admin/listProducts">Lista de Productos<FaPager /></Link>
          <Link to="/admin/listUsers">Lista de usuarios<FaPager /></Link>
        </div>
        <div className='lists_products'>
          <Link to="/admin/addProduct">Agregar Productos<FaPager /></Link>
          <Link to="/">Catalogo de Productos<FaPager /></Link>
        </div>
        </div>
        <FaUserAstronaut className='avatar' />
      </div>
      </div>

    </>
  )
}

export default Admin