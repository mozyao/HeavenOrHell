import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
app.use('/posts',postRoutes);
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://gigas:Ji9hMLwfTfcjg89@cluster0.qqzdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=> console.log(`Server on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
