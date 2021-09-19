import { Router } from "express"
import { createUser, login, getAllUsers } from "../Controllers/user.controller"

const router = Router()

router.get("/all", getAllUsers)

router.post("/signup", createUser)

router.post("/login", login)

export default router
