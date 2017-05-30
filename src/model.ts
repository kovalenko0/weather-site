import { createAppStore, AppStore } from './store'
import { AppView } from './components/app-view'

export class AppModel {
  private store: AppStore

  constructor() {
    this.store = createAppStore({})
  }

  public subscribe(view: AppView) {
    return this.store.subscribe(() => view.setState(this.store.getState()))
  }
}