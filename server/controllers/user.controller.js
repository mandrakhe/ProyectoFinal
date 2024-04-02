import User from '../models/user.models.js';



export const getUser = async(req, res) =>{
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({ message: 'Usuario no encontrado' })
    res.status(200).json(user);
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.status(200).json({ users });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Ocurrió un error al obtener los Usuarios" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        return res.status(204).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Ocurrió un error al eliminar el usuario' });
    }
};

export const editUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        return res.status(200).json({ message: 'Usuario actualizado correctamente', user: updatedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Ocurrió un error al actualizar el usuario' });
    }
};