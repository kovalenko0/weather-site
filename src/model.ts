import { createAppStore, AppStore } from './store'
import { AppView } from './components/app-view'
import { WeatherClient } from './weather-client'

export class AppModel {
  private store: AppStore

  private weatherClient: WeatherClient

  constructor() {
    this.weatherClient = new WeatherClient()
    this.store = createAppStore({})
    this.updateLocation()
  }

  public subscribe(view: AppView) {
    return this.store.subscribe(() => view.setState(this.store.getState()))
  }

  private updateLocation() {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      this.weatherClient
        .getForecast(coords.latitude, coords.longitude)
        .then(r => console.log(r))
    })
  }

}
