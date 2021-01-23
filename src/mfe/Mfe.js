import React, { useEffect } from "react";


export function Mfe({ name, host, history, data, events, token }) {
    useEffect( () => {
        const scriptId = `micro-frontend-script-${name}`;
        //var headers = {};
        //if (!!token) {
        //    headers = {
        //        'Content-Type': 'application/json',
        //        'Accept': 'application/json',
        //        'Authorization' : 'bearer ' +  token
        //    }
        //}

        const renderMicroFrontend = () => {

            window[`render${name}`](`${name}-container`, history, data, events, token);
        };

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`,{ mode: 'no-cors' })
            .then((res) => res.json())
            .then((manifest) => {
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${host}${manifest.files["main.js"]}`;
                script.onload = () => {
                    renderMicroFrontend();
                };
                document.head.appendChild(script);
            });

        return () => {
            window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
        };
    });

    return <main id={`${name}-container`} />;
}


Mfe.defaultProps = {
    document,
    window,
};

