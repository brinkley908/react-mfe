import React, { Component } from 'react';
import { Mfe } from "@spekta/react-mfe";

const Loading = () => {
    return (
        <span>Loading...</span>
    );
};

export class Home extends Component {
    static displayName = Home.name;
    render() {
        return (
            <div id="profile-partial-service">
                <Mfe id="homepage" name="Test" host={process.env.REACT_APP_MFE_RESOURCE} loading={Loading} />
            </div>
        );
    }
}