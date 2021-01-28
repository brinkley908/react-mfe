import React from 'react'
import { AuthProvider, AuthRoute } from "@spekta/react-oidc";
import { Callback } from './components/auth/callback';
import { SilentRenew } from './components/auth/silentRenew';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { CustomerDetails } from './components/CustomerDetails';
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from './components/Layout';

//import '@spekta/react-mfe/dist/index.css'

const App = () => {
  return (
    <AuthProvider logger={console}>
      <BrowserRouter basename={"/"} >
        <Layout>
          <Route exact={true} path="/signin-oidc" component={Callback} />
          <Route exact={true} path="/silentRenew" component={SilentRenew} />
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <AuthRoute exact path="/customer" component={CustomerDetails} />
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
