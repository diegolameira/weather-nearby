import * as React from 'react'
import { WeatherTypes } from 'typings'

import { WeatherIcon } from 'components/weather-icon'
import styles from 'styles/components.module.scss';
import { useCities } from 'hooks/useCities';

interface ListProps {
  header?: React.ReactNode,
}
export const List: React.FC<ListProps> = ({ header }) => {
  const { cities } = useCities()
  return (
    <div className={styles.list}>
      <header>
        {header}
      </header>
      <main>
        <ul>
          {
            cities?.map((item, idx) => (
              <ListItem key={idx} {...item} />
            ))
          }
        </ul>
      </main>
    </div>
  )
}

interface ListItemProps {
  weatherType: WeatherTypes
  current: string
  title: string
  min: string
  max: string
}
const ListItem: React.FC<ListItemProps> = ({ weatherType, current, title, min, max }) => {
  return (
    <li className={styles.listItem}>
      <span className="list-item icon"><WeatherIcon weather={weatherType} /></span>
      <span className="list-item current">{current}</span>
      <strong className="list-item title">{title}</strong>
      <span className="list-item max">{max}</span>
      <span className="list-item min">{min}</span>
    </li>
  )
}
