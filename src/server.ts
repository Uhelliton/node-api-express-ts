import './app/supports/util/module-alias'
import { Server } from "@overnightjs/core"
import * as bodyParser from "body-parser"
import { ForecastController } from "@src/app/units/forecast/http/controllers/forecast.controller"
import { Application } from "express"

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super()
  }

  public init(): void  {
    this.setupExpress()
    this.setupController()
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json())
  }

  private setupController() : void {
    const forecastController =  new ForecastController()
    this.addControllers(forecastController)
  }

  public getInstanceApp(): Application {
    return this.app
  }
}
