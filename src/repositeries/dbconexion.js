//exportando el paquete MSSQL
//este archivo sirve o permite la conexion a la base de datos
const sql = requiere('mssql');
const config = require('../config');

const db_settings ={
    server:config.db_server,
    port: config.dbport,
    database: config.db_database,
    option: {
        //autentificacion de window 
        trustedConnection: true
    }
}

//Funcion asincrona
const getConection =async ()=>{
    try{
        const pool = await sql.connect(db_settings);
        return pool;
    }catch(Error){
        console.log(error)
    }
}

module.exports = getConection
