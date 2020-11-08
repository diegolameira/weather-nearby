import * as React from 'react'
import { RouteComponentProps } from "@reach/router"

interface Props extends RouteComponentProps {}
export const NotFound: React.FC<Props> = () => {
  return (
    <h1>404 - Not Found</h1>
  )
}
