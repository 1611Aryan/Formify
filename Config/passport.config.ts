import { PassportStatic } from "passport"
import { Mixin } from "ts-mixer"

import Local from "./../Passport/Local/local.strategy"

class PassportConfig extends Mixin(Local) {
  constructor(passport: PassportStatic) {
    super(passport)
    this.passport = passport
    this.init()
  }

  init = () => {
    this.login()
    this.signup()
  }
}

export default PassportConfig
