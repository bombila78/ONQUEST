import React from 'react';
import HeaderMenu from './header-menu';
import HeaderSide from './header-side';
export default class Header extends React.Component {






    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <div className="header__logo">
                            <h2>ON<span>QUEST</span></h2>
                            <p>ОНЛАЙН-КВЕСТЫ</p>
                        </div>  
                        <HeaderMenu />
                    </div>
                </div>
                <HeaderSide />
            </header>
        )
    }
}