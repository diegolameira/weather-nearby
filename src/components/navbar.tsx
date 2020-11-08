import * as React from 'react';
import { Link } from "@reach/router";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to={'/'}>
        Map
      </Link>
      <Link to={'/search'}>
        Search
      </Link>
      <Link to={'/list'}>
        List
      </Link>
    </nav>
  );
}
