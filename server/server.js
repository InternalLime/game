var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.');

http.createServer(function(request, res) {


var collectionLiderboardName = "liderboard";
var url = 'mongodb://localhost:27017/myproject'; // TODOkul можно ли изменить myproject?

/*
Я ожидаю Json в следующем формате

{
    "login": "Вася",
    "score": 42
}

*/

function parseData(data)
{
    var collection = JSON.parse(data, function(key, value) {
        if (key == "result")
        {
            return parseInt(value);
        }
        return value;
    });
    return collection;
}


function insert(db, collection, data)
{
    collection.insert(data, function(err, result) 
    {
        console.log("[INSERT]");  
        db.close(); 
    });
}

function writeDB(data)
{
    // Преобразуем строку в коллекцию js
    data = parseData(data);

    var updateNote = function(db)
    {
        var collection = db.collection(collectionLiderboardName);


        collection.find({"login" : data.login}).toArray(function(err, docs) {
            console.log("[FIND]");
            console.log(docs);
            if (docs.length > 1)
                console.log("В базе данных больше одной записи для одного логина!");

            if (docs.length != 0 && docs[0].result < data.result)
            {               
                collection.remove({"login" : data.login}, function(err, numberOfRemovedDocs) {
                    console.log("[DELETE] " + numberOfRemovedDocs);
                    insert(db, collection, data);               
                });          
            }
            else if (docs.length == 0)
            {
                insert(db, collection, data);             
            }
            else
            {
                db.close();
            }
        });      
    }

    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert'); // TODOkul что это?

    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to server");

      updateNote(db);    
    });
}

if (request.url == "/send_result")
{
    var body = [];
    
    request.on('error', function(err) {
        console.error(err);
    }).on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        // At this point, we have the headers, method, url and body, and can now
        // do whatever we need to in order to respond to this request.
        console.log(body);
        writeDB(body);
    });
    
    res.end('Записано');
} 
else if (request.url == "/get_lider_board")
{
    // получить данные   
    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert'); // TODOkul что это?

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        var collection = db.collection(collectionLiderboardName);

        collection.find({}).toArray(function(err, docs) {
            console.log("[FIND]");
            console.log(docs);
            var data = "";
            for (doc in docs)
            {
                data = data + docs[doc].login + "\t" + docs[doc].result + "\n";
            }
            
            // отправить
            console.log(data);
            res.end(data);

            db.close();
        });              
    });
}
else
{
    file.serve(request, res); // запрос к обычному файлу
}


}).listen(8080, '0.0.0.0');

console.log('Server running on port 8080');