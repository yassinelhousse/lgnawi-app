import dotenv from 'dotenv';
import app from './src/app.js';
import sequelize from './src/config/database.js';
import "./src/models/Artist.js";
import "./src/models/Booking.js";
import "./src/models/EventInfo.js";
import "./src/models/EventInfo.js";
import "./src/models/associations.js";
 



dotenv.config();
const PORT = process.env.PORT || 3000;// Use 3000 as default port if not specified
async function startServer(){
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Database connected successfully.');
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch(error){

        console.error('Unable to connect to the database:',error);
    }
}
startServer();