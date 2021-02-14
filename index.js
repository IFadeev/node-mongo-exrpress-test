const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const todoRouters = require('./routes/todos');


const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine); //регистрация движка
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(todoRouters);

async function start() {
    try {
        await mongoose.connect("mongodb+srv://*:*@cluster0.jbj6b.mongodb.net/<dbname>?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start();


/*



*/
