import axios from 'axios'

export class WeatherClient {
  public getForecast(lat: number, lon: number) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat,
        lon,
        appid: '550d37ceac0472e36e3d513748a780eb'
      }
    })
  }
}