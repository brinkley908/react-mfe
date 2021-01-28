import React, { Component } from "react";
import { AuthConsumer } from "@spekta/react-oidc";
import { Mfe } from "./Mfe";

export  class MfeAuth extends Component {

    getAccessToken() {
        const storage = !!this.props.localStore ? localStorage : sessionStorage;
        const oidcStorage = JSON.parse(storage.getItem(`oidc.user:${process.env.REACT_APP_OIDC_AUTHORITY}:${process.env.REACT_APP_OIDC_CLIENT_ID}`))
        if (!!oidcStorage && !!oidcStorage.access_token) {
            return oidcStorage.access_token;
        }

        return "";
    }

    render() {
        return (
            <AuthConsumer>
                {({ isAuthenticated }) => {
                    const token = this.getAccessToken();
                    console.log("ACCESS TOK");
                    console.log(token);
                    if (isAuthenticated()) {
                        return <Mfe history={this.props.history} host={this.props.host} name={this.props.name} data={this.props.data} events={this.props.events} loading={this.props.loading} token={token} />;
                    }
                    else {
                        return null
                    }
                }}
            </AuthConsumer>
        )
    }
}
