/**
 * Port
 */

 process.env.PORT = process.env.PORT || 3333

 /**
  * Entorno
  */
 process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
 /**
  * expiresIn
  * 60 segundos
  * 60 minutos
  * 24 horas
  * 30 dias
  */
process.env.EXPIRES_IN = 60 * 60 * 24 * 30 

/**
 * SEED
 */
process.env.SEED = process.env.SEED || 'estas-es-la-clave-secreta-desarrollo'
 /**
  * Base de datos
  */
 let urlDB
 if (process.env.NODE_ENV === 'dev') {
     urlDB = 'mongodb://localhost:27017/restserver'
 } else {
     urlDB = process.env.MONGO_URI
 }
process.env.URLDB = urlDB

/**
 * CLIENT_ID
 */
process.env.CLIENT_ID = process.env.CLIENT_ID || '163774569170-i5pc6icf8e33cbh3fpeeh6uual7u8lip.apps.googleusercontent.com'