/* eslint-disable jsx-a11y/heading-has-content */

import '../../css/admin.css';


function Admin() {


  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col-md-4" >
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <p className="card-text">
                  <strong>Price:</strong>
                </p>
                <button
                  className="btn btn-primary"

                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"

                >
                  Delete
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Admin