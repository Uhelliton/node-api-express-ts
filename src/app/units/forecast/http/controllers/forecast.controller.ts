import { Controller, Get } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('forecast')
export class ForecastController {

  @Get('')
  public all(_: Request, response: Response ): void {
    response.send([{
      time: '2020-04-26T00:00:00+00:00',
      forecast: [
        {
          lat: -33.792726,
          lng: 151.289824,
          name: 'Manly',
          position: 'E',
          rating: 2,
          swellDirection: 64.26,
          swellHeight: 0.15,
          swellPeriod: 3.89,
          time: '2020-04-26T00:00:00+00:00',
          waveDirection: 231.38,
          waveHeight: 0.47,
          windDirection: 299.45,
        },
      ],
    }, {
      time: '2020-04-26T00:00:00+00:00',
      forecast: [
        {
          lat: -33.792726,
          lng: 151.289824,
          name: 'Manly',
          position: 'E',
          rating: 2,
          swellDirection: 64.26,
          swellHeight: 0.15,
          swellPeriod: 3.89,
          time: '2020-04-26T00:00:00+00:00',
          waveDirection: 231.38,
          waveHeight: 0.47,
          windDirection: 299.45,
        },
      ],
    }])
  }
}
