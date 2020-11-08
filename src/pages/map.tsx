import * as React from 'react'
import { RouteComponentProps } from "@reach/router"

import { Map } from 'components/map'

interface Props extends RouteComponentProps {}
export const MapScreen: React.FC<Props> = () => {
  return (
    <Map />
  )
}
