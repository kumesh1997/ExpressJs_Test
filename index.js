import express from 'express'
import usersRoutes from './routes/users.js';
// import mongoConnection from './Connection/index.js';
// Body parser takes requests from browser
import bodyParser from 'body-parser'

const app = express();
const PORT = 5000; 

// to use jason data inside the application
app.use(bodyParser.json());

// mongodb connection
// mongoConnection();

app.use('/users', usersRoutes);


app.listen(PORT, () => console.log(`Server is Running on Port http://localhost:${PORT}`));