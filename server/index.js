import app from './app.js';
import { connectDB } from './database/db.js';




//Acá estamos dando el máximo de imagenes en el upload 



connectDB();
app.listen(5001, () => console.log(`Server on PORT 5001`));