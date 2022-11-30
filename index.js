import express from 'express'
import usersRoutes from './routes/users.js';
// import mongoConnection from './Connection/index.js';
// Body parser takes requests from browser
import bodyParser from 'body-parser'
import require from 'twilio'

const app = express();


const PORT = 5000; 



// to use jason data inside the application
// app.use(bodyParser.json());



// app.use('/users', usersRoutes);

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

const sid = 'AC91cfa1b63f8db5f8227da3451f123dab';
const auth_token = 'ccac0c976c162755b9169c31b05725e5';
const my_number = '+94705771284';
//var client = require('twilio')(sid, auth_token);
var client = require(sid,auth_token);

app.post('/sendEmail', (req, res) => {
    const number = req.body.number;
    const message = req.body.message;

    // sending the message
    client.messages
    .create({body: message, from: my_number, to: number})
    .then(message => console.log('Message sent !!!'))
    .catch((err) => { console.log(err)});
    res.send('Successfully sent');
})
app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.listen(PORT, () => console.log(`Server is Running on Port http://localhost:${PORT}`));