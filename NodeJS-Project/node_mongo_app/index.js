//Підключаєм Експрес
const express = require('express');

//підключаєм mangoose 
const mongoose = require('mongoose')
const path = require('path')
const exphbs =require("express-handlebars")
const todoRoutes = require('./routes/todos');
const { request } = require('express');

//Створюємо переміну, щоб позначити ПОРТ
//На цьому порту буде запуск app
const PORT = process.env.PORT || 3000

//створюємо обєкт додатку
const app = express()
//ств конфігурацію для шаблонізатора
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
//движок для рендеру сторінок
app.engine('yarema', hbs.engine)
app.set('view engine', 'yarema')
app.set('views', 'views ')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)

async function start() {
    // метод connect помагає підключитися до БД
    try {
        await mongoose.connect('mongodb+srv://yarema:123_bd@cluster0.sv29w.mongodb.net/todos', {
            //це для того щоб не було помилок в консолі
            useNewUrlParser: true,
            useFindAndModify: false
        })
        // listen запускає сервер
        app.listen(PORT, () => {

          //калбек буде викликати в тому випадку коли сервер вже запущений
        console.log("server has beeen started...");
        })
    } catch (e) {
        console.log(e);

    }
}
start();

