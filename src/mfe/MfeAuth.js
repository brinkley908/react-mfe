import React, { useEffect } from "react";
import { AuthConsumer } from "@spekta/react-oidc";
import { Mfe }  from "./Mfe";

export const MfeAuth = ({ name, host, history, data, events, loading }) => {
    return (
        <AuthConsumer>
            {({ isAuthenticated, getAccessToken }) => {
                const token = getAccessToken();
                if (isAuthenticated()) {
                    return <Mfe  history={history} host={host} name={name} data={data} events={events} loading={loading} token={token} />;
                }
                else {
                    return null
                }
            }}
        </AuthConsumer>
    )
}
