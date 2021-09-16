import { Request, Response } from "express"
import { nanoid } from "nanoid"
import Form, { formI } from "../Models/form.model"
import { console_error } from "../Util/Console"

export const createForm = async (req: Request, res: Response) => {
  try {
    type input = {
      owner: formI["owner"]
      formName: formI["formName"]
      formDescription: formI["formDescription"]
      questions: formI["questions"]
      theme: formI["theme"]
    }

    const id = nanoid()
    const { owner, formName, formDescription, questions, theme }: input =
      req.body
    const expiry = (req.body.expiry | Infinity) as formI["expiry"]

    await Form.create({
      owner,
      formName,
      formDescription,
      questions,
      theme,
      expiry,
    })
  } catch (err) {
    console_error({ createForm: err })
    return res.status(500).send(err)
  }
}
