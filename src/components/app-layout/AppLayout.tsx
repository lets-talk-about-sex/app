import * as React from 'react';
import Helmet from 'react-helmet';
// Hér koma myndir fyrir social media

import { helmet } from 'utils/helmet';
import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => {
  // console.log("breytti um router")
  return(
    <div className={s.layout}>
    <Helmet {...helmet} />
    
    {children}

  {/* footer kemur hér */}

    {isDev }
  </div>
  )
};
