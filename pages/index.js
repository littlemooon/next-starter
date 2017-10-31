// @flow

import * as React from 'react'

import type { Url } from '../types'
import Header from '../components/header'
import ErrorBoundary from '../components/error-boundary'

type Props = {
  children?: React$Node,
  url: Url,
}

export default function Index({ children, url }: Props) {
  return (
    <ErrorBoundary>
      <Header title={'HOME'} pathname={url.pathname} />
      <p>{`oh g'mornin`}</p>
      {children}
      <style jsx>{`
        p {
          color: blueviolet;
        }
      `}</style>
    </ErrorBoundary>
  )
}
