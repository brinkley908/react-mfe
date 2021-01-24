import React from 'react'
import { AuthProvider } from "@spekta/react-oidc";
import { Customer } from './components/Customer';
import { BrowserRouter } from "react-router-dom";
//import '@spekta/react-mfe/dist/index.css'

const App = () => {
  return(
    <AuthProvider logger={console}>
        <Customer />
    </AuthProvider>
  );
}

export default App
