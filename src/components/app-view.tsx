import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppState } from '../store'
import { AppModel } from '../model'

export interface AppProps {
  model: AppModel
}

export class AppView extends React.Component<AppProps, AppState> {
  public state: AppState = {}

  private unsubscribe: Function

  public componentWillReceiveProps(props: AppProps) {
    this.unsubscribe = props.model.subscribe(this)
  }

  public componentWillUnmount() {
    this.unsubscribe()
  }

  public render() {
    return <div>
      <h1>App View</h1>
      <div>City: {this.state.city}</div>
      <div>Period: {this.state.forecastPeriod}</div>
    </div>
  }
}
