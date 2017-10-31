// @flow

import * as React from 'react'

import Flex from './flex'

type Props = {
  children: React.Node,
}

type State = {
  hasError: boolean,
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
  }

  componentDidCatch(error: Error, info: Object) {
    this.setState({ hasError: true })
    console.error(error, info)
  }

  render() {
    return (
      <Flex>
        {this.state.hasError ? (
          <h1>{`Something went wrong :'(`}</h1>
        ) : (
          this.props.children
        )}
      </Flex>
    )
  }
}
