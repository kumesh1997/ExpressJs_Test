import express from 'express'
const router = express.Router();

var sid = 'AC91cfa1b63f8db5f8227da3451f123dab';
var auth_token = 'ccac0c976c162755b9169c31b05725e5';
var my_number = '+94705771284';


router.post('/', (req, res) => {
    let response = async () => {
        var client = require('twilio')(sid, auth_token);
    }
})

export default router;