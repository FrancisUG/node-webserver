const express = require('express')
var hbs = require('hbs'); //hbs
require('dotenv').config();


const app = express()
const port = process.env.PORT;



//Handlebars ('hbs')
app.set('view engine', 'hbs'); //hbs
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res)=> {
  res.render('home', {
    name: '   Francisco Caiza',
    title: 'Node App 2023 '
  });
});


app.get('/generic', (req, res)=> {
  res.render('generic', {
    name: '   Francisco Caiza',
    title: 'Node App 2023 '
  });
});

app.get('/elements', (req, res)=> {
  res.render('elements', {
    name: '   Francisco Caiza',
    title: 'Node App 2023 '
  });
});

//Ingresamos a algo publico q se llama generic
app.get('/generic', (req, res)=> {
    res.sendFile(__dirname + '/public/generic.html');
  });

  app.get('/elements',(req, res)=> {
    res.sendFile(__dirname + '/public/elements.html');
  });

  app.get('*',(req, res)=> {
    res.sendFile(__dirname + '/public/404.html');
  });


  app.listen(port,() =>{
    console.log(`Example app listening at http://localhost:${port}`)
  })
