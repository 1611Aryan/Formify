import Express from "express"

import MongoConfig from "./Config/mongo.config"
import ExpressConfig from "./Config/express.config"

if (process.env.NODE_ENV !== "production") require("dotenv").config()

import { console_info } from "./Util/Console"
import publicRouter from "./Routes/public.routes"
import privateRouter from "./Routes/private.routes"

const PORT = process.env.PORT || 5000
const app = Express()

ExpressConfig(app)

MongoConfig()

app.use("/", publicRouter)
app.use("/private", privateRouter)

app.listen(PORT, () => console_info(`Server Running on Port ${PORT}`))
