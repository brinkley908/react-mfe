import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import '../index.css';

export const Layout = props => {

    return (
        <>
            <Container>
                <div className="menu">
                    <div className="menu-item">
                          <Link to="/">Home</Link>              
                    </div>
                    <div className="menu-item">
                          <Link to="/counter">Counter</Link>              
                    </div>
                    <div className="menu-item">
                          <Link to="/customer">Customer</Link>              
                    </div>
                </div>
            </Container>
            <Container>
                {props.children}
            </Container>
        </>
    );

}