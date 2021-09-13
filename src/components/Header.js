import React from 'react'
import '../styles/Header.css';

export default function Header() {
    return (
        <nav id="navbar">
            <div id="logo">Fashion</div>
            <div id="nav">
            <div className="nav-item">
                    <a href="#">Home</a>
                </div>
                <div className="nav-item">
                    <a href="#">Shop</a>
                </div>
                <div className="nav-item dropdown">
                    <a href="#">Mens</a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <a>Women</a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="nav-item megadown">
                    <a>Women</a>
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
