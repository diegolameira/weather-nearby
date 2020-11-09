import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

import styles from 'styles/pages.module.scss';
import { List } from 'components/list';
import { SearchBox } from 'components/map';

interface Props extends RouteComponentProps {}
export const SearchScreen: React.FC<Props> = () => {
  return (
    <div className={styles.searchScreen}>
      <List
        header={
          <>
            <h1>Search</h1>
            <SearchBox />
          </>
        }
      />
    </div>
  );
};
