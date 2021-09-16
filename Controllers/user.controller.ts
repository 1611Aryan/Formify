import { Request, Response } from "express"
import User, { UserI } from "../Models/user.model"
import { console_error } from "../Util/Console"

export const createUser = async (req: Request, res: Response) => {
  const { owner, password }: UserI = req.body
  if (!owner || !password)
    return res.status(400).send({ message: "Incorrect Payload" })
  try {
    //!Check if already exists

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
