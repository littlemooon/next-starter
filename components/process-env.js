// @flow

import * as React from 'react'

export default function ProcessEnv() {
  return <p>{`process.env.NAME: ${process.env.NAME || 'undefined'}`}</p>
}
