import * as React from 'react'
import { RouteComponentProps } from "@reach/router"

interface Props extends RouteComponentProps {}
export const ListScreen: React.FC<Props> = () => {
  return (
    <h1>ListScreen</h1>
  )
}
