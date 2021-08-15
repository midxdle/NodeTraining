const promise = require('promise');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/namesDB';

//callback without promise
MongoClient.connect(url, function(err, db) {
    db.collection('names').updateOne({
        "name" : "newname"
    }), {
        $set : {"name" : "cna"}
    }
});

//callback with promise
MongoClient.connect(url)
    .then(function(err, db) {
        db.collection('names').updateOne({
            "name" : "nrg"
        }), {
            $set : {"name" : "cna"}
        }
    });

//elaborated callback with promise
MongoClient.connect(url)
    .then(function(db) {
        db.collection('names').insertOne({
            nameid : 6,
            name : "newname"
        })
    .then(function(dbtwo) {
        dbtwo.collection('names').insertOne({
            nameid : 9,
            name : "newnametwo"
        })
    })
    });

//custom promise
const Q = require('q');

function Add() {
    let a=9;
    let b=6;
    let c=a+b;
}

let Displayer = Q.denodeify(Add);

let promise = Add;
promise.then
{console.log("is just an custom promise made by midxdle");}
