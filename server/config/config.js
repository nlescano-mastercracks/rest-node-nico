// PUERTO
process.env.PORT = process.env.PORT || 3000;


//entorno

//variable que establece heroku
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// VENCIMIENTO DEL TOKEN

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//SEDD DE AUTENTICACION
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

//BASE DE DATOS
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


// GOGLE CLIENT ID

process.env.CLIENT_ID = process.env.CLIENT_ID || '488662878388-0b9kopbr7qdlt5ghls73d1n6g453b56a.apps.googleusercontent.com'