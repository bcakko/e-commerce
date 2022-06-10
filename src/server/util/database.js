const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = () => {
    MongoClient.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@adesso.2sfcvab.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,(err,db) => {
        _db = db;
        console.log('DB CONENCTED');
    })
        
}

const getdb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database';
}


exports.mongoConnect = mongoConnect;
exports.getdb = getdb;