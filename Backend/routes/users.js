import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

//update new tour
router.put("/:id",verifyUser, updateUser);

//delete tour
router.delete("/:id",verifyUser, deleteUser);

//get single tour
router.get('/:id', verifyUser, getSingleUser);

//get ALl tour
router.get('/',verifyAdmin, getAllUser);

export default router 