import { Router } from "express"

import { createForm } from "../Controllers/form.controller"

const router = Router()

router.get("/", createForm)

export default router
