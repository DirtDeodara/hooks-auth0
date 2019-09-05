import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Auth0Provider from './Auth0Provider';

render(
  <Auth0Provider
    domain="dirtdeodara.auth0.com"
    client_id="smaRXV2o443PmGSzZP8zQWyo1aPq58m0"
    redirect_url="http://localhost:7890"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
