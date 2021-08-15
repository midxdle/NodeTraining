const promise = reuqire('bluebird');
const mongoClient = promise.pormisifyAll(require('mongodb')).MongoClient;
const url = 'mongodb:/localhost/namesDB';

mongoClient.connectAsync('mongodb:/localhost/namesDB')
.then(function(db) {
    return db.collection('names').findAsync({})
})
.then(function(cursor) {
    cursor.each(function(err, doc) {
        console.log(doc);
    })
});