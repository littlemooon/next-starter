// @flow

import * as React from 'react'

type Props = {
  children?: React$Node,
  row?: boolean,
}

export default function Flex({ row, children }: Props) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          display: 'flex';
          flex-directon: ${row ? 'row' : 'column'};
        }
      `}</style>
    </div>
  )
}
