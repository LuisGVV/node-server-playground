const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use((req, res, next)=> {
    var now = new Date().toString();

    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) console.log("Unable to log to file");
    });
    next();
});

/* app.use((req, res, next)=>{
    res.render('maintenance.hbs');
}); */

app.use(express.static(__dirname + `/public`));

hbs.registerHelper('getCurrentYear', ()=> new Date().getFullYear());

hbs.registerHelper('ScreamIt', (text)=> text.toUpperCase());

hbs.registerHelper('toDoList', (list, options)=> {
    var liElements = '';
    list.forEach(listElement => {
        liElements += `<li>${options.fn(listElement)}</li>`;
    });
    return `<ul>${liElements}</ul>`
});

app.get('/', function rootGet(req, res) {
    res.render(
        'home.hbs',
        {
            pageTitle: 'Home Page',
            welcomeMessage: 'Welcome to the home page',
        }
    );
});

app.get('/about', function about(req, res) {
    res.render(
        'about.hbs',
        {
            pageTitle: 'About Page',
        }
    );
});

app.get('/todo', function about(req, res) {
    res.render(
        'todo.hbs',
        {
            pageTitle: 'To do page regarding to this stuff',
            stuffToDo: [
                'Read more about node.js',
                'Remember more about git commands',
                'See how cloud deploying works',
            ],
        }
    );
});

app.get('/bad', function about(req, res) {
    res.send({
        errorMessage: "Error! Unable to fulfill request"
    });
});

app.listen(port, ()=> {
    console.log(`Server is up on ${port}`)
});