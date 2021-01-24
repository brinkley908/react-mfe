import React, { Component } from 'react';
import { Mfe } from "@spekta/react-mfe";
import { AuthConsumer } from "@spekta/react-oidc";


const Loading = () => {
    return(
        <span>Loading...</span>
    );
};

export class Customer extends Component {
    static displayName = Customer.name;

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="profile-partial-service">
                <Mfe name="Test" host="https://localhost:44306" loading={Loading} />
            </div>
        );
    }

}