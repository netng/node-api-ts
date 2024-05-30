import { Router, Request, Response } from "express"
import { 
    createUserController,
    deleteUserController,
    getUserByIdController,
    getUsersController,
    updateUserController 
} from "../controllers/users.controllers";

const router = Router()

router.get('/', getUsersController)
router.get('/:id', getUserByIdController)
router.post('/', createUserController)
router.put('/:id', updateUserController)
router.delete('/:id', deleteUserController)

export default router;