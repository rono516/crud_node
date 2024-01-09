const express = require('express')
const app = express()
const mongoose = require("mongoose")
const Product = require('./models/productModel')

app.use(express.json())  /**middleware */

app.get('/', (req, res) => {
    res.send('Hello world!!')
})
app.get('/blog', (req, res) => {
    name = "Collins"
    res.send('Hello from Blog ' + 'My names are ' + name)
})

app.post('/product', async (req, res) => {
    // console.log(req.body);
    // res.send(req.body)
    try {
        // save product to database
        const { name, quantity, price, image } = req.body;

        const product = new Product(name, quantity, price, image)
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})


mongoose.connect('mongodb+srv://root:root@cluster0.qgwektg.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("connected to mongodb database")

        app.listen(3000, () => {
            console.log('App is running on port 3000');
        })
    }).catch((error) => {
        console.log(error);
    })