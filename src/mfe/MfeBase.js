import React, { Component } from 'react'

export class MfeBase extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const scriptId = `micro-frontend-script-${this.props.name}`;
        const id = !this.props.id ? this.props.name + "-container"  : this.props.id;

        const renderMicroFrontend = () => {
            window["render" + this.props.name](id, this.props.history, this.props.data, this.props.events, this.props.token);
        };

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        fetch(`${this.props.host}/asset-manifest.json`)
            .then((res) => res.json())
            .then((manifest) => {
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${this.props.host}${manifest.files["main.js"]}`;
                script.onload = () => {
                    renderMicroFrontend();
                };
                document.head.appendChild(script);
            });

        return () => {
            window["unmount" + this.props.name] && window["unmount" + this.props.name](id);

        };
    };

    render() {

        const id = !this.props.id ? this.props.name + "-container"  : this.props.id;

        return (
            <main id={id} />
        );
    };
}