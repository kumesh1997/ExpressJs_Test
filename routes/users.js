import express from 'express'
const router = express.Router();

import { getUser, addUser, deleteUser, updateUser } from '../controllers/users.js'




router.get('/', getUser)

router.post('/', addUser);

router.delete('/:name', deleteUser);

router.patch('/update', updateUser)


export default router;