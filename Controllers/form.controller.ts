import { Request, Response } from "express"
import { nanoid } from "nanoid"
import Form, { formI } from "../Models/form.model"
import User from "./../Models/user.model"
import { console_debug, console_error } from "../Util/Console"
import jwt from "jsonwebtoken"

export const getForms = async (_req: Request, res: Response) => {
  try {
    const forms = await Form.find({}).lean()

    return res.status(200).send(forms)
  } catch (err) {
    console_error({ getForms: err })
    return res.status(500).send(err)
  }
}

export const getFormByURL = async (req: Request, res: Response) => {
  try {
    const url = req.params.id
    const query = { url: url.toString() }
    const form = await Form.findOne(query).lean()
    if (form) return res.status(200).send(form)
    return res.status(404).send({ message: "Form Doesn't Exist" })
  } catch (err) {
    console_error({ getFormByURL: err })
    return res.status(500).send(err)
  }
}

export const getFormByUsers = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const token = req.signedCookies["jwt"]

    const payload = jwt.verify(token, process.env.JWT_SECRET)
    if (id !== payload.sub)
      return res.status(403).send({ message: "Access Denied" })
    const forms = await Form.find({ "owner.id": id }, { owner: 0, theme: 0 })
    return res.status(200).send(forms)
  } catch (err) {
    console_error({ getFormByUsers: err })
    return res.status(500).send(err)
  }
}

export const createForm = async (
  req: Request<any, any, formI>,
  res: Response
) => {
  try {
    const id = nanoid()
    const { owner, formName, questions } = req.body
    const theme = req.body.theme || {
      colorPallete: {
        primaryColor: "teal",
        secondaryColor: "darkgrey",
      },
    }
    const formDescription = req.body.formDescription || " "
    const expiry = req.body.expiry || Infinity
    const token = req.signedCookies["jwt"]

    if (!token) return res.status(403).send({ message: "Access Denied" })

    const payload = jwt.verify(token, process.env.JWT_SECRET)

    const form = await Form.create({
      owner: { ...owner, id: payload.sub },
      formName,
      formDescription,
      questions: questions.map(question => ({
        ...question,
        question_id: nanoid(28),
      })),
      theme,
      expiry,
      url: id,
    })

    await User.findOneAndUpdate(
      {
        "owner.email": owner.email,
        "owner.name": owner.name,
      },
      {
        $push: {
          forms: {
            formName,
            formId: form._id,
          },
        },
      }
    ).lean()

    return res.status(200).send({ message: "Form Created" })
  } catch (err) {
    console_error({ createForm: err })
    return res.status(500).send(err)
  }
}

export const editQuestion = async (req: Request, res: Response) => {
  try {
    const { id, url, question } = req.body
    console_debug({ question })
    const token = req.signedCookies["jwt"]

    const payload = jwt.verify(token, process.env.JWT_SECRET)
    if (id !== payload.sub)
      return res.status(403).send({ message: "Access Denied" })

    await Form.findOneAndUpdate(
      { url, "questions.question_id": question.question_id },
      {
        $set: {
          "questions.$": question,
        },
      }
    )

    return res.status(202).send({ message: "Question Updated Successfully" })
  } catch (err) {
    console_error({ editQuestion: err })
    return res.status(500).send(err)
  }
}
