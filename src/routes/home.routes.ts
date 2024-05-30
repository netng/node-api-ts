import { Router, Request, Response } from "express"

// New router instance
const router = Router()

// Home routes
router.get('/', (req: Request, res: Response) => {
    res.send('Hello express!')
})

export default router;