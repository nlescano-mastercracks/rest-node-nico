// PUERTO
process.env.PORT = process.env.PORT || 3000;


//entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//BASE DE DATOS
let urlDB;
//if (process.env.NODE_ENV === 'dev') {
//   urlDB = 'mongodb://localhost:27017/cafe'
//} else {
urlDB = 'mongodb://uvv7s9po0zgauzld2w4i:APjyPBDxmeg3Rtrl5x9N@bgeevltcjiukgkt-mongodb.services.clever-cloud.com:27017/bgeevltcjiukgkt';
//}

process.env.URLDB = urlDB;