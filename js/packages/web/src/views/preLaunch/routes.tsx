import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';

import { PreLaunchView } from './';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
      {/* <BrowserRouter basename={'/'}> */}
        <Providers>
          <Switch>
            <Route path="/" component={() => <PreLaunchView />} />
          </Switch>
        </Providers>
      {/* </BrowserRouter> */}
      </HashRouter>
    </>
  );
}
