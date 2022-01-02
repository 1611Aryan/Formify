import { Router } from "express"
import passport from "passport"
import {
  login,
  getAllUsers,
  errorHandler,
} from "../Controllers/user.controller"
import { console_debug } from "../Util/Console"

const router = Router()

router.get("/all", getAllUsers)

router.post(
  "/signup",
  (req, res, next) =>
    passport.authenticate("signup", { session: false }, (err, user, info) =>
      errorHandler(req, res, next, err, user, info)
    )(req, res, next),
  (req, res) => res.status(200).send({ message: "User Created" })
)

router.post("/login", passport.authenticate("login", { session: false }), login)

export default router
