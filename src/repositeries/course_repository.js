const getConection = require('./dbconexion')
const course_repository ={};

 course_repository= ()=>{
    try{
        const context = await getConection();
        const result = await context.request().quey('select * from course')
        return result.recordset;
    } catch(error){
        console.log(error);
    }
}

module.exports = course_repository