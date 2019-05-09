import * as React from 'react';
import Helmet from 'react-helmet';

// Hér koma myndir fyrir social media

import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => {
  console.log("breytti um router")
  return(
    <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      
    </Header>

    {children}

  {/* footer kemur hér */}

    {isDev && <Devtools />}
  </div>
  )
};
