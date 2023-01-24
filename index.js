import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import adminRouter from './routes/admin.js';
import infoRouter from './routes/info.js';

dotenv.config();
await connectDB();

const PORT = process.env.PORT || 5000;

const app = new express();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}


app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...')
})


app.use('/api/admin', adminRouter);
app.use('/api/info', infoRouter);


app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))
