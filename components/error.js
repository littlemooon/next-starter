// @flow

import * as React from 'react'

type Props = {
  error?: boolean,
}

export default class Error extends React.Component<Props> {
  componentWillReceiveProps = (nextProps: Props) => {
    if (nextProps.error) throw new Error()
  }

  render() {
    return null
  }
}
