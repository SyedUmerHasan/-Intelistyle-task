import React from 'react'
import '../styles/Header.css';

export default function Header() {
    return (
        <nav id="navbar">
            <div id="logo">Fashion</div>
            <div id="nav">
            <div class="nav-item">
                    <a href="#">Home</a>
                </div>
                <div class="nav-item">
                    <a href="#">Shop</a>
                </div>
                <div class="nav-item dropdown">
                    <a href="#">Mens</a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a>Women</a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div class="nav-item megadown">
                    <a>Women</a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div class="nav-item onlyicon">
                    <a href="#"><i class="far fa-bell"></i></a>
                </div>
            </div>
        </nav>
    )
}
