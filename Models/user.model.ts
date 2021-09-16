import { Schema, model, Document } from "mongoose"
import bcrypt from "bcrypt"

export type UserI = Document & {
  owner: {
    name: string
    email: string
  }
  forms: {
    formName: string
    formId: string
  }[]
  password: string
}

const UserSchema = new Schema<UserI>(
  {
    owner: {
      type: {
        name: String,
        email: String,
      },
      required: true,
    },
    forms: {
      type: [{ formName: String, formId: String }],
      required: true,
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
