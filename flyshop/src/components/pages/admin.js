import '../../css/admin.css';
import { Link } from 'react-router-dom';
function Admin() {


  return (
    <>
      <div>
        <ul>
          <li>                                
            <Link className='juan' to='/admin/listProduct'>Lista de productos</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Admin