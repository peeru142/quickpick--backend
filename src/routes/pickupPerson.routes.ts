import express from 'express'; 
import {
  getAllPickupPersons,
  createPickupPerson,
  getPickupPersonById,
  updatePickupPerson,
  deletePickupPerson,
} from '../controllers/pickupPerson.controller';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// Apply authMiddleware to routes that need protection
router.get('/', authMiddleware, getAllPickupPersons);
router.post('/', authMiddleware, createPickupPerson);
router.get('/:id', authMiddleware, getPickupPersonById);
router.put('/:id', authMiddleware, updatePickupPerson);
router.delete('/:id', authMiddleware, deletePickupPerson);

export default router;
