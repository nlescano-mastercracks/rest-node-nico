// PUERTO
process.env.PORT = process.env.PORT || 3000;


//entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//BASE DE DATOS
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://damian:cotolengo@cluster0-lghz8.mongodb.net/cafe?retryWrites=true';
}

process.env.URLDB = urlDB;