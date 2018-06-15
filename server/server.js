const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

var app = express();

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
app.use(bodyParser.json()); //We are setting middleware from client request to server
app.use(bodyParser.urlencoded({
    extended: false
}));

const publicPath = path.join(__dirname + '/../public')

app.use(express.static(publicPath));

//bydefault will be '/' is mapped to index.html page -> app.get('/') [not required]

app.post('/submitVal', urlencodedParser, function (request, response) {

    var Obj = {
        name: request.body.nameId,
        message: request.body.messageId
    }
    response.send(Obj); //wil show the object on browser

    /*  response.sendFile('home.html', { //will be re-directed to home.html
         root: publicPath
     }); */

});

app.listen(port, () => {
    console.log(`Running @${port} port`);
})