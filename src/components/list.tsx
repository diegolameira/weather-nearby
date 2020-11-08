import * as React from 'react'
import { WeatherTypes } from 'typings'

import { WeatherIcon } from 'components/weather-icon'
import styles from 'styles/components.module.scss';

interface ListProps {
  items: ListItemProps[]
}
export const List: React.FC<ListProps> = ({ items }) => {

  return (
    <ul className={styles.list}>
      {
        items.map((item, idx) => (
          <ListItem key={idx} {...item} />
        ))
      }
    </ul>
  )
}

interface ListItemProps {
  weather: WeatherTypes
  current: string
  title: string
  min: string
  max: string
}
const ListItem: React.FC<ListItemProps> = ({ weather, current, title, min, max }) => {
  return (
    <li className={styles.listItem}>
      <span className="list-item icon"><WeatherIcon weather={weather} /></span>
      <span className="list-item current">{current}</span>
      <strong className="list-item title">{title}</strong>
      <span className="list-item max">{max}</span>
      <span className="list-item min">{min}</span>
    </li>
  )
}
