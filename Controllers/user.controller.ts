import { NextFunction, Request, Response } from "express"

import jwt from "jsonwebtoken"
import User, { UserI } from "../Models/user.model"
import { console_error } from "../Util/Console"

/*
!Rate Limitter
!Form Limit
!No SQL Injection
*/

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({}).lean()
    return res.status(200).send(users)
  } catch (err) {
    console_error({ getAllUsers: err })
    return res.status(500).send(err)
  }
}

export const errorHandler = (
  _req: Request,
  res: Response,
  next: NextFunction,
  err: any,
  _user: UserI,
  info: any
) => {
  if (err) {
    if (typeof err === "number") return res.sendStatus(err)
    if (err.status && err.message && typeof err.status === "number")
      return res.status(err.status).send(err.message)
    return res.send(err)
  }
  if (info && info.message) return res.status(409).send(info.message)
  next()
}

export const login = (req: Request, res: Response) => {
  const user = req.user as UserI

  if (!user)
    return res.status(404).send({ message: "Incorrect Username or Password" })

  const payload = {
    sub: user._id,
    name: user.username,
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET)

  const convertToMilliseconds = (number: number) => 1000 * 60 * 60 * 24 * number

  return res
    .cookie("jwt", token, {
      maxAge: convertToMilliseconds(7),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      signed: true,
    })
    .status(200)
    .send({ message: "Login Successfull", forms: user.forms })
}
