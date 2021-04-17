//bring in express to help build web server
const express = require('express');

//create variable that is express function
const app = express();

//set up our public folder to send static files to the client (browser)
app.use(express.static('server/public'))

//set up how to read things from the request body
const bodyParser =  require('body-parser')
//putting things in body using urlencoding
app.use(bodyParser.urlencoded({extended: true}));

//global array of items
const equationsArray = [];

//make a GET route to send back items
app.get('/equations' , (req, res) => {
    res.send(equationsArray);
})

//POST route to get a new item from the client(browser)
app.post('/equations' , (req, res) => {
    let newEquation = req.body;
    console.log('got a new equation' , newEquation);
    equationsArray.push(newEquation);
    //allow for creating/adding new thing on client side
    res.sendStatus(201);
    
})

//tell our server to listen on a port
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
    
})
