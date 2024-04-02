import React, { useState, useContext } from 'react';
import { ExportToExcel } from '../util/ExportToExcel';
import { ExportToPDF } from '../util/ExportToPDF'
import '../adminCSS/lists.css'
import { UserContext } from '../../../../context/UserContext';

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
        } catch (error) {
            console.error(error);
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
                                    <button onClick={() => handleDeleteUser(object._id)}>Eliminar</button>
                                    {editingUserId === object._id ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editedUserData.username || ''}
                                                onChange={(e) => setEditedUserData({ ...editedUserData, username: e.target.value })}
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
        </>
    );
}

export default UserList;
