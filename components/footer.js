// @flow

import * as React from 'react'

import Error from './error'

type State = {
  error: boolean,
}

export default class Footer extends React.Component<*, State> {
  state = {
    error: false,
  }

  onError = () => this.setState(() => ({ error: true }))

  render() {
    return (
      <footer>
        <button onClick={this.onError}>{'Trigger error'}</button>
        <p>{`process.env.NAME: ${process.env.NAME || 'undefined'}`}</p>
        <Error error={this.state.error} />
        <style jsx>{`
          footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid grey;
          }
        `}</style>
      </footer>
    )
  }
}
