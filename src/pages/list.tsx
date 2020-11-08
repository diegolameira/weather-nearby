import * as React from 'react'
import { RouteComponentProps } from "@reach/router"

import { List } from 'components/list'

interface Props extends RouteComponentProps {}
export const ListScreen: React.FC<Props> = () => {
  return (
    <>
      <h1>ListScreen</h1>
      <List items={
        Array(15).fill({
          weather: 'PartlyCloudy',
          current: 19,
          title: 'Barra da Tijuca',
          min: 19,
          max: 29,
        })
      } />
    </>
  )
}
