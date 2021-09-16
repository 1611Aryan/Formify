import mongoose from "mongoose"
import { console_info, console_warn } from "../Util/Console"

const MongoConfig = (): void => {
  const MongoURI = process.env.MONGODB_URI

  mongoose.connect(MongoURI)

  const connection = mongoose.connection

  connection.once("open", () => console_info("Database is Connected"))

  connection.once("close", () => console_warn("Database is Disconnected"))
}

export default MongoConfig
