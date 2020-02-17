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
        await mongoose.connect("mongodb+srv://amdinfadeev:34tmQ34t233sd@cluster0.jbj6b.mongodb.net/<dbname>?retryWrites=true&w=majority", {
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

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://amdinfadeev:<password>@cluster0.jbj6b.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/