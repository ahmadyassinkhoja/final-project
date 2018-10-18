const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT= 3000

const movies = [
    {
      name: 'Harry Potter',
      genre: 'Magic',
      length: 126,
      image: '../../assets/images/harry.png'
    },
    {
      name: 'Naruto',
      genre: 'Action',
      length: 150,
      image:  '../../assets/images/naruto.png'
    },
    {
      name: 'One Piece',
      genre: 'Adventure',
      length: 175,
      image:  '../../assets/images/lofi.png'
    },
    
  ]

  // for parsing and delevering the json
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}) );

  // for google auth and allowing passing headers from server to app
  app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });


  
app.get('/', (req, res) => {
    res.send({
        msg: 'Welcome to Movies Backend'
    })
})

app.get('/movies', (req, res) => {
    res.send({data: movies})
})

app.post('/addMovie', (req, res) => {
    res.send(req.body)
})

 

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})