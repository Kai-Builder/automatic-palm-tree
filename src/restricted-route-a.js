import React from 'react';
import Restricted from './restricted';
import {
  SecureRoute
} from '@okta/okta-react';

// import {Route as SecureRoute} from 'react-router-dom';

const RestrictedRouteA = () => (
  <SecureRoute
    component={Restricted}
    path='/restricted-a'
  />
);

export default RestrictedRouteA;
