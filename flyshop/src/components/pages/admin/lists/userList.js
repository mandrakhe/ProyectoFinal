import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../../context/UserContext';
import '../adminCSS/lists.css';
import { ExportToExcel } from '../util/ExportToExcel';
import { ExportToPDF } from '../util/ExportToPDF';

function UserList() {
    const { users, loading, error, handleDeleteUser, handleEditUser } = useContext(UserContext);
    const [editingUserId, setEditingUserId] = useState(null);
    const [editedUserData, setEditedUserData] = useState({});

    const handleEditClick = (userId) => {
        setEditingUserId(userId);
        const userToEdit = users.find(user => user._id === userId);
        setEditedUserData(userToEdit);
    };

    const handleSaveEdit = async () => {
        try {
            await handleEditUser(editingUserId, editedUserData);
            setEditingUserId(null);
            setEditedUserData({});
            // Muestra la notificación de éxito
            toast.success('Usuario actualizado correctamente', {
               
                autoClose: 2000, // Cierra automáticamente después de 2 segundos
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteUserWithAlert = (userId) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar el usuario?')) {
            handleDeleteUser(userId);
            // Muestra la notificación de éxito
            toast.success('Usuario eliminado correctamente', {
            
                autoClose: 2000, // Cierra automáticamente después de 2 segundos
            });
        }
    };

    return (
        <>
            <h1 className='publicaciones'>Lista de usuarios</h1>
            <div className="export">
                {loading && <p>Loading Users...</p>}
                {error && <p>Error: {error.message}</p>}
                {users && (
                    <ExportToExcel apiData={users} fileName="Users_List" />
                )}
                <ExportToPDF />
            </div>
            <div className='container_list'>
                {users && users.length > 0 ? (
                    users.map((object) => {
                        return (
                            <div className='list_product' key={object._id}>
                                <div className='list_detail'>
                                    <h4>Correo electrónico de registro: {object.email}</h4>
                                    <h2>Nombre: {object.username}</h2>
                                </div>
                                <div className='actions actions_effects'>
                                    <button onClick={() => handleDeleteUserWithAlert(object._id)}>Eliminar</button>
                                    {editingUserId === object._id ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editedUserData.username || ''}
                                                onChange={(e) => setEditedUserData({...editedUserData, username: e.target.value })}
                                            />
                                            <button onClick={handleSaveEdit}>Guardar</button>
                                        </>
                                    ) : (
                                        <button onClick={() => handleEditClick(object._id)}>Editar</button>
                                    )}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No users found</p>
                )}
            </div>
            <ToastContainer />
        </>
    );
}

export default UserList;
