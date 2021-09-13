import React from 'react'
import '../styles/Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
export default function Header() {
    return (
        <nav id="navbar">
            <div id="logo">Fashion</div>
            <div id="nav">
                <div className="nav-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="nav-item">
                    <Link to="/shop">Shop</Link>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/">Men</Link>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/">Women</Link>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="nav-item megadown">
                    <Link to="/">Top Products</Link>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="nav-item onlyicon">
                    <a href="#"><i className="far fa-bell"></i></a>
                </div>
            </div>
        </nav>
    )
}
