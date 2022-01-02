import { Schema, model, Document } from "mongoose"
import bcrypt from "bcrypt"

export type UserI = Document & {
  username: string
  email: string

  forms: {
    formName: string
    formId: string
  }[]
  password: string
}

const UserSchema = new Schema<UserI>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    forms: {
      type: [{ formName: String, formId: String }],
      required: true,
      _id: false,
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

UserSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 10)
  this.password = hashedPassword
  next()
})

export default model<UserI>("User", UserSchema, "users")
