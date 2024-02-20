import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'


// configure env 
dotenv.config()

//database config
connectDB();

// rest app 
const app = express()

//Middelwares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

// rest api
app.get('/', (req, res) => {
    res.send("<h1>welcome to ecommerce app</h1 >");
})

//Port
const PORT = process.env.PORT || 8080;

//run Listen
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgGreen);
});