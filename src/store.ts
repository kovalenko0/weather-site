import { createStore, Action, Store } from 'redux'

export enum ActionType {
  SetCity,
  SetForecastPeriod
}

export type ForecastPeriod = 'day' | 'week' | 'month'

export interface AppAction<Payload> extends Action {
  type: ActionType,
  payload: Payload
}

export interface SetCityAction extends AppAction<string> {
  type: ActionType.SetCity
}

export interface SetPeriodAction extends AppAction<ForecastPeriod> {
  type: ActionType.SetForecastPeriod
}

export interface AppState {
  city?: string,
  forecastPeriod?: ForecastPeriod
}

export interface AppStore extends Store<AppState> {}

export function createAppStore(initialState: AppState) {
  return createStore<AppState>(mainReducer)
}

function mainReducer(state: AppState, action: AppAction<any>) {
  switch (action.type) {
    case ActionType.SetCity:
      return setCity(state, (action as SetCityAction).payload)
    case ActionType.SetForecastPeriod:
      return setForecastPeriod(state, (action as SetPeriodAction).payload)
    default:
      return state
  }
}

function setCity(state: AppState, city: string) {
  return { ...state, city }
}

function setForecastPeriod(state: AppState, forecastPeriod: ForecastPeriod) {
  return { ...state, forecastPeriod }
}