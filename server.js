const express = require('express')
const app = express()
const mongoose = require("mongoose")

app.get('/', (req, res) => {
    res.send('Hello world!!')
})
app.get('/blog', (req, res) => {
    name = "Collins"
    res.send('Hello from Blog ' + 'My name is ' + name)
})

app.post('/product', (req, res) => {
    console.log(req.body);
})


mongoose.connect('mongodb+srv://root:root@cluster0.dqftwvf.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("connected to mongodb")

        app.listen(3000, () => {
            console.log('App is running on port 3000');
        })
    }).catch((error) => {
        console.log(error);
    })