import React, { Component } from 'react'
import { MfeBase } from './MfeBase'

export class Mfe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            len: 0
        }
        this.checkLoading();
    }

    componentDidMount() {
        this.checkLoading(500);
    }


    checkLoading(timeout) {
        const elem = document.getElementById(this.props.name + "-container")

        if (elem && elem.childNodes.length > 0) {
            this.setState({ ...this.state, loading: false, len: timeout })
        }
        else {
            var Me = this;
            setTimeout(() => {
                Me.checkLoading(timeout);
            }, timeout);
        }
    }

    renderLoading(Component) {
        if (!!Component && this.state.loading) {
            return <Component />
        }

        return null
    }

    render() {
        const loading = this.renderLoading(this.props.loading)
        let loader = this.state.loading
            ? loading
            : null

        return (
            <div>
                {loader}
                <MfeBase history={this.props.history} host={this.props.host} name={this.props.name} data={this.props.data} events={this.props.events} />
            </div>
        );
    }
}