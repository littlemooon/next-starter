// @flow

import * as React from 'react'
import Link from 'next/link'
import Flex from './flex'

type Props = {
  title: React$Node,
  pathname: string,
}

export default function Header({ title, pathname }: Props) {
  return (
    <Flex>
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
        ul {
          padding: 10px;
        }
        li {
          margin-bottom: 20px;
        }
      `}</style>
    </Flex>
  )
}
