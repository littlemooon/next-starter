// @flow

import * as React from 'react'

import type { Url } from '../types'
import Header from '../components/header'
import Footer from '../components/footer'
import ErrorBoundary from '../components/error-boundary'

type Props = {
  url: Url,
}

export default function Index({ url }: Props) {
  return (
    <ErrorBoundary>
      <Header title={'HOME'} pathname={url.pathname} />
      <p>{`oh g'mornin`}</p>
      <Footer />
      <style jsx>{`
        p {
          color: blueviolet;
        }
      `}</style>
    </ErrorBoundary>
  )
}
