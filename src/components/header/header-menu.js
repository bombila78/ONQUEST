import React from 'react';

export default class HeaderMenu extends React.Component {

    state = {
        hidden: true
    }

     changeVisibility = () => {
        this.setState(({hidden}) => {
           return{
            hidden: !hidden
           } 
        })
    }

    render() {
        return (
            <div className="header__menu">
                <div className="header__navbar">
                    <nav className="navbar horizontal">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="nav-link" href="/">
                                    ВХОД
                                    </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" href="/">
                                    РЕГИСТРАЦИЯ
                                    </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={this.changeVisibility}>
                                    МЕНЮ
                                    </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={this.changeVisibility}>
                                    <div className="header__burger">
                                        <span></span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__hiddenMenu" hidden={this.state.hidden}>
                    <nav className="navbar vertical">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            КВЕСТЫ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            О НАС
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            ОПЛАТА
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            УСЛОВИЯ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            КОНТАКТЫ
                            </a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }


}