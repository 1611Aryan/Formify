import { Router } from "express"
import { createUser } from "../Controllers/user.controller"

const router = Router()

router.post("/signup", createUser)

export default router
