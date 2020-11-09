import * as React from 'react'
import { RouteComponentProps } from "@reach/router"

import styles from 'styles/pages.module.scss'

interface Props extends RouteComponentProps {}
export const DetailScreen: React.FC<Props> = () => {
  return (
    <div className={styles.detailScreen}>
      <h1>DetailScreen</h1>
    </div>
  )
}
