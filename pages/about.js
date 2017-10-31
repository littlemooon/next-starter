// @flow

import * as React from 'react'

import type { Url } from '../types'
import Header from '../components/header'
import ErrorBoundary from '../components/error-boundary'
import Footer from '../components/footer'

type Props = {
  children?: React.Node,
  url: Url,
}

export default function About({ children, url }: Props) {
  return (
    <ErrorBoundary>
      <Header title={'ABOUT'} pathname={url.pathname} />
      {children}
      <p>{'whats this aboot'}</p>
      <Footer />
      <style jsx>{`
        p {
          color: coral;
        }
      `}</style>
    </ErrorBoundary>
  )
}
