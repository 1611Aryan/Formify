import express, { Request, Response } from "express"
import morgan from "morgan"
import helmet from "helmet"
import compression from "compression"

const shouldCompress = (req: Request, res: Response) =>
  req.headers["x-no-compression"] ? false : compression.filter(req, res)

const ExpressConfig = (app: express.Application) => {
  app.use(compression({ filter: shouldCompress }))
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(helmet())
  app.use(morgan("dev"))
}

export default ExpressConfig
