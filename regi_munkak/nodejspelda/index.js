const express = require("express")
const app = express();

app.use(express.json())

app.listen(3000, function(){
    console.log("Serevr is running on port 3000")
})

app.get("/", function(req, res){
    res.send("Hello ez már a node js szerver") // localhost:3000 GET
})

let products = [
    {
        id: "1",
        Name: "SSD",
        price:"17000",
    },

    {
        id: "2",
        Name: "Processzor",
        price:"85000",
    },
    {
        id: "3",
        Name: "Alaplap",
        price:"36000",
    }
]


app.get("/products", function(reg, res) { // localhost:3000/products GET
    res.json(products)

})

app.get("/products/:id", function(reg, res) { // localhost:3000/products/1420 GET
    const pid = reg.params.id
    const product = products.find((p) => p.id === pid)
    if (!product) {
        return res.send("Nem létezik a termék!")
    }
    else{
        res.json(product)
    }


})
app.post("/products", function(req, res){ // localhost:3000/products POST
    const newProduct = req.body
    products.push(newProduct)
    res.json(newProduct)

})

