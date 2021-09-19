import { Request, Response } from "express"
import bcrypt from "bcrypt"
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

export const createUser = async (req: Request, res: Response) => {
  const { owner, password }: UserI = req.body
  if (!owner || !password || !owner.email || !owner.name)
    return res.status(400).send({ message: "Incorrect Payload" })
  try {
    const doesExist = !!(await User.findOne(
      { "owner.name": owner.name, "owner.email": owner.email },
      {
        forms: 0,
        password: 0,
      }
    ).lean())

    if (doesExist) {
      return res
        .status(409)
        .send({ message: "User already exists, try logging in" })
    }

    await User.create({
      owner,
      password,
      forms: [],
    })
    return res.status(203).send({ message: "User Created Succesfully" })
  } catch (err) {
    console_error({ createUser: err })
    return res.status(500).send(err)
  }
}

export const login = async (req: Request, res: Response) => {
  const { owner, password }: UserI = req.body
  if (!owner || !password || !owner.email || !owner.name)
    return res.status(400).send({ message: "Incorrect Payload" })
  try {
    const user = await User.findOne({
      "owner.name": owner.name,
      "owner.email": owner.email,
    }).lean()

    if (!user) {
      return res.status(404).send({ message: "Incorrect Username or Password" })
    }

    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        sub: user._id,
        name: user.owner.name,
      }

      const token = jwt.sign(payload, process.env.JWT_SECRET)

      const convertToMilliseconds = (number: number) =>
        1000 * 60 * 60 * 24 * number

      return res
        .cookie("jwt", token, {
          maxAge: convertToMilliseconds(1),
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          signed: true,
        })

        .status(200)
        .send({ message: "Login Successfull", forms: user.forms })
    }

    return res.status(401).send({
      message: "Incorrect Password",
    })
  } catch (err) {
    console_error({ login: err })
    return res.status(500).send(err)
  }
}
