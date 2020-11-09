import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

import styles from 'styles/pages.module.scss';
import { List } from 'components/list';

interface Props extends RouteComponentProps {}
export const ListScreen: React.FC<Props> = () => {
  return (
    <div className={styles.listScreen}>
      <List
        header={
          <>
            <h1>Weather Now</h1>
            <h2>Nearby locations</h2>
          </>
        }
      />
    </div>
  );
};
