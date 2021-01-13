/**
 * Port
 */

 process.env.PORT = process.env.PORT || 3333

 /**
  * Entorno
  */
 process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

 /**
  * Base de datos
  */
 let urlDB
 if (process.env.NODE_ENV === 'dev') {
     urlDB = 'mongodb://localhost:27017/restserver'
 } else {
     urlDB = 'mongodb+srv://elboqueronpaco:Ocap_5791@cluster0.egcxl.mongodb.net/restserver'
 }
process.env.URLDB = urlDB