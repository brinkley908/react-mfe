import React, { Component } from 'react';
import { Mfe } from "@spekta/react-mfe";

const Loading = () => {
    return (
        <span>Loading...</span>
    );
};

export class Counter extends Component {
    static displayName = Counter.name;
    render() {
        return (
            <div id="profile-partial-service">
                <Mfe id="counter" name="Counter" host={process.env.REACT_APP_MFE_RESOURCE} loading={Loading} />
            </div>
        );
    }
}