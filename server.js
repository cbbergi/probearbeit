const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const TokenGenerator = require('uuid-token-generator');

const storage = [
    {
    name: "Test",
    birthday: "2020-04-08",
    email: "t",
    password: "t"
    }
];


function validateLogin(loginData){

    return storage.some(function(d){

        return d.email === loginData.email && d.password === loginData.password
    })
}

app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));

app.post('/api/registration',function(req,res){

    storage.push(req.body);
    res.send(JSON.stringify({body: req.body}));
});

app.post('/api/login', function(req, res){

    const loggedIn = validateLogin(req.body)


    if(loggedIn){

        const token = new TokenGenerator();
        const accessToken = token.generate();
        const user = storage.find(d => { return d.email === req.body.email});
        user.accessToken = accessToken;

        res.send(JSON.stringify({loggedIn: loggedIn, accessToken: accessToken}));
    }
    else {

        return res.send(JSON.stringify({loggedIn: loggedIn}))
    }
})

app.get('/api/profil', function(req, res){

    
    const accessToken = req.headers.authorization.split(' ')[1];
    const user = storage.find(d => { return d.accessToken === accessToken})

    if(user){

        res.send(JSON.stringify(user));
    }
    else{
        res.statusCode(401);
    }

})

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});


app.listen(80, function () {
    console.log('Server listening on port 80!');
});