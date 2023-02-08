import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import infoRouter from './routes/info.js';
import multer from 'multer';
import path from 'path';
import uploadImgRouter from './routes/upload_img.js';
import cors from 'cors';


dotenv.config();
await connectDB();

const PORT = process.env.PORT || 5000;

const app = new express();

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

//middle ware
app.use('/images', express.static('public/images'));

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/info', infoRouter);
app.use('/api/UploadImage', uploadImgRouter);

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))
