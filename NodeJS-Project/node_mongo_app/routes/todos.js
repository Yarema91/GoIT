const { Router, request } = require("express")
const Todo = require("../models/Todo")
const Todo = require('../models/Todo')
const router = Router()

router.get(' /', async (req, res) => {
    const Todo = await Todo.find({})
    //  в папці views
res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos
})
})

router.get(' /create', (req, res) => {
    //  в папці views
res.render('create', {
    title: 'Create todo',
    isCrreate: true
})
})

router.post('/create', async(req, res) => {
    const todo = new Todo({
        title: req.body.title
    })

    await todo.save()
    res.redirect('/')
})
router.post('/complite', async(req, res)=> {
    const todo = await Todo.findById(rec.body.id)
    todo.complited = !!req.body.completed
    await todo.save()
    res.redirect('/')
})
module.exports = router 