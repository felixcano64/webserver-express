const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + '/public'));


// express HBD engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'felix cano perez'
    });

});

app.get('/about', (req, res) => {

    res.render('about', {});

});



// app.get('/', (req, res) => {
//     //    res.send('Hola Mundo')

//     let salida = {
//         nombre: 'Felix',
//         edad: 56,
//         url: req.url
//     }

//     res.send(salida);

// });

app.listen(port, () => {
    console.log('escuchando en el pruero ' + port);
})