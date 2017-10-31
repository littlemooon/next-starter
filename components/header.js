// @flow

import * as React from 'react'
import Link from 'next/link'
import Flex from './flex'

type Props = {
  title: React.Node,
  pathname: string,
}

export default function Header({ title, pathname }: Props) {
  return (
    <header>
      <h1>{title}</h1>
      <Flex row>
        <ul>
          <li>
            <Link href="/">
              <a>{'home'}</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>{'about'}</a>
            </Link>
          </li>
        </ul>
      </Flex>
      <p>{`currently on: ${pathname}`}</p>
      <style jsx>{`
        header {
          border-bottom: 1px solid grey;
          margin-bottom: 20px;
        }
        ul {
          display: flex;
          padding: 0;
          margin: 20px 0;
        }
        li {
          display: flex;
          margin-right: 20px;
        }
      `}</style>
    </header>
  )
}
