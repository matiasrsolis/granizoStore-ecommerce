import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';
// import uploadRoute from './routes/uploadRoute';
const path = require('path');

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoute);

app.use('/api/products', productRoute);

app.use('/api/orders', orderRoute);

// app.use('/api/uploads', uploadRoute);

app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

// app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));

// app.use(express.static(path.join(__dirname, '/../frontend/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
// });

//app.listen(5000, () => { console.log("Server started at http://localhost:5000") })




// if(process.env.NODE_ENV === "production"){
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname,  "build", "index.html"))
//   });
// }

app.listen((process.env.PORT || 5000), function(){ console.log('listening on *:5000'); });
