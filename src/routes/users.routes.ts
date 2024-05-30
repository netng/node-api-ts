import { Router, Request, Response } from "express"
import { 
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser 
} from "../models/users.models";

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;