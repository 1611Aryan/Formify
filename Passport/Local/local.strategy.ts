import passport, { PassportStatic } from "passport"

import { Strategy as localStrategy } from "passport-local"
import bcrypt from "bcrypt"

import User from "../../Models/user.model"
import { console_debug, console_error } from "../../Util/Console"

class Local {
  protected passport: PassportStatic
  constructor(passport: PassportStatic) {
    this.passport = passport
  }

  login = () =>
    passport.use(
      "login",
      new localStrategy(async (username, password, done) => {
        try {
          const message = "Incorrect Username or Password"
          const user = await User.findOne({ username }).lean()
          if (user && (await bcrypt.compare(password, user.password)))
            return done(null, user)

          return done(null, false, { message })
        } catch (err) {
          console_error({ login: err })
          return done(err)
        }
      })
    )

  signup = () =>
    passport.use(
      "signup",
      new localStrategy(
        {
          usernameField: "username",
          passwordField: "password",
          passReqToCallback: true,
        },
        async (req, username, password, done) => {
          try {
            const message = "Username/ Email already in use"
            const email = req.body.email
            if (!email || !username || !password) return done({ status: 400 })
            const user = await User.findOne(
              { email, username },
              { password: 0 }
            ).lean()

            if (user) return done({ status: 409, message }, false)

            await User.create({
              username,
              email,
              forms: [],
              password,
            })

            return done(null, false)
          } catch (err) {
            console_error({ login: err })
            return done(err)
          }
        }
      )
    )
}

export default Local
