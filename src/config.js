const config = require('dotenv').config() //metodo de configuracion del dontenv


const dotenv ={ 
    port:process.env.PORT || 3000,
    dbport:process.env.DBPORT || "1433",
    dbUser:process.env.DB_USER || "",
    db_pass:process.env.DB_PASS || "",
    db_server:process.env.DB_SERVER || "",
    db_database:process.env.DB_DATABASE || ""
    
    
}

//EXPORTAR EL MODULO
module.exports = dotenv