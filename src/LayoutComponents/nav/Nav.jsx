import React from 'react';

import Breakpoint from '../Breakpoint.jsx';
import Collapsible from './Collapsible.jsx';
import SideNav from './SideNav.jsx';

function Navigation() {

  return (
    <Breakpoint
      render={
        ({ TabletAndBelow, OnDesktop }) => {
          return (
            <div>
              <OnDesktop>
                <SideNav />
              </OnDesktop>
              <TabletAndBelow>
                <Collapsible />
              </TabletAndBelow>
            </div>
          );
        }
      }
    />
  );
}

Navigation.displayName = 'Navigation';

export default Navigation;
