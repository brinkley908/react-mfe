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
