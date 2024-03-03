 
//Importing express module
const express = require('express');
const app = express();
const connection = require("./db_config")
const { getProducts, getProductBySearch } = require("./products-controler")
const cors = require("cors")


app.use(express.json()); //to post data as json
app.use(cors())
 
app.get('/products',getProducts);
app.get('/products/:key', getProductBySearch)

let port=5000
app.listen(port, ()=>{
    console.log("Server is Listening on Port ", port);
})