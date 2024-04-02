import { Link } from 'react-router-dom';
import { FaPager } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa";
import '../../../css/dashBroard.css'
function Admin() {


  return (
    <>
        <h1>Bienvenido al Panel de Administración</h1>
     <div className='dashboard'>
    <div className='links'>
    <Link to="/admin/listProducts">Lista de Productos<FaPager />
</Link>
        <br />
        <Link to="/admin/listUsers">Lista de usuarios<FaPager />
</Link>
        <br />
        <Link to="/admin/add-product">Agregar Productos<FaPager />
</Link>
        <br />
        <Link to="/">Productos<FaPager />
</Link>
    </div>

      <FaUserAstronaut className='avatar' />
      </div>


    </>
  )
}

export default Admin