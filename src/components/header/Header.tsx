import * as React from "react";
import "./Header.css";

import logo_omega from "./logo_omega.jpg";

export class Header extends React.Component {
    public render() {
        return (
            <div className="Header">
                <header className="App-header">
                    <div className="header-menu">
                        <img src={logo_omega} className="App-logo" alt="logo"/>
                        <p className="omega-name">OMEGA-R</p>
                        <a className="header-div-button header-button" href="#">WORK</a>
                        <a className="header-div-button header-button" href="#">ABOUT</a>
                        <a className="header-div-button header-button" href="#">CONTACT</a>
                        <a className="header-div-button header-button" href="#">CAREERS</a>
                        <a className="header-div-button header-button" href="#">TEAM</a>
                        <a className="header-div-button header-button" href="#">BLOG</a>
                        <a className="call-phone" href="#">+1(646)-586-2025</a>
                        <a className="box header-language" href="#">eng</a>
                        <div className="eng-back"/>
                    </div>
                </header>
            </div>
        );
    }
}
