# @spekta/react-mfe

> React Micro Front End Components

[![NPM](https://img.shields.io/npm/v/@spekta/react-mfe.svg)](https://www.npmjs.com/package/@spekta/react-mfe) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @spekta/react-mfe
```

## Description
Micro Front Ends allows allows your components in external resource to be available in any project.<br>
Create your components in the ususal way and and stubs for them in the index.js of the resource.

## Usage

Client
```jsx
import React, { Component } from 'react'

import { Mfe } from '@spekta/react-mfe'
import '@spekta/react-mfe/dist/index.css'

const Loading = () => {
    return (
        <span>Loading...</span>
    );
};

const App = () => {
  return (
    <Mfe id="counter" name="Counter" host="http://resourceUrl" loading={Loading} />
  );
}

```
Resource index.js

```jsx
window.renderCustomerDetails = async (containerId, history, data, events, token) => {

    ReactDOM.render(
        <CustomerDetails Mfe={true} Data={data} Token={token} CustomerId={data.customerId} OnClick={events.onClick} ShowUpdateButton={data.showUpdateButton} />,
        document.getElementById(containerId),
    );

};
window.unmountCustomerDetails = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

window.renderCounter = async (containerId, history) => {
   
    ReactDOM.render(
        <Counter  />,
        document.getElementById(containerId),
    );

};
window.unmountCounter = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// in order to stop the invokation of the main App in your client
// ensure you have an element in your client matching the externalContainer value.
// Alternatively, if this is a resource only and not a functioning application, you can exclude the section below.
const externalContainer = 'service-client-id';
if (!document.getElementById(externalContainer)) {
    ReactDOM.render(
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>,
        document.getElementById('root'));

    registerServiceWorker();
}

```
examples can be found at https://github.com/brinkley908/OpenIddictSample in the Resource project


## MfeAuth

<b>MfeAuth</b> requires the @spekta/react-oidc authentication package
 (see https://www.npmjs.com/package/@spekta/react-mfe and  https://github.com/brinkley908/OpenIddictSample)

```jsx
import React from 'react'
import { AuthProvider, AuthRoute } from "@spekta/react-oidc";
import { Callback } from './components/auth/callback';
import { SilentRenew } from './components/auth/silentRenew';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { CustomerDetails } from './components/CustomerDetails';
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from './components/Layout';


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

```
CustomerDetails.js
```jsx
import React, { Component } from 'react';
import { MfeAuth } from "@spekta/react-mfe";

const Loading = () => {
    return (
        <span>Loading...</span>
    );
};

export class CustomerDetails extends Component {
    static displayName = CustomerDetails.name;

    constructor(props) {
        super(props);
        this.state = {
            data: {
                customerId: 1,
                showUpdateButton: true
            },

            events: {
                onClick: this.onClick
            }

        };
    }


    onClick() {
        alert("onClick");
    }

    render() {
        return (
            <MfeAuth name="CustomerDetails" host={process.env.REACT_APP_MFE_RESOURCE} data={this.state.data} events={this.state.events} localStore={true} loading={Loading} />
        );
    }

}

```