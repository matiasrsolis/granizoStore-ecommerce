import express from 'express';
import data from './data';

const app = express();

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.filter(x => x._id == productId);
    if (data) {
        res.json(product[0]);
    } else {
        res.status(404).send({msg: "Producto no encontrado."});
    }
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => { console.log("Server started at http://localhost:5000") })