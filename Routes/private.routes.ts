import { Router } from "express"

import {
  createForm,
  editQuestion,
  getFormByURL,
  getFormByUsers,
  getForms,
} from "../Controllers/form.controller"

const router = Router()

router.get("/", getForms)

router.get("/:id", getFormByURL)

router.get("/user/:id", getFormByUsers)

router.post("/add", createForm)

router.patch("/edit", editQuestion)

export default router
