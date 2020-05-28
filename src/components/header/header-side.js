import React from 'react';

export default class HeaderSide extends React.Component {

    state = {
        hidden: true
    }

    changeVisibility = () => {
        this.setState(({hidden}) => {
            return {
                hidden: !hidden
            }
        })
    }

    render() {
        return (
            <div className="headerSide">
                <div className="container">
                    <div className="header__side">
                        <div className="header__side_dark">
                            <h2>НА КАКОЙ</h2>
                            <div className="header__side_content">
                            <p className="header__side_title">
                                ТЁМНАЯ СТОРОНА
                        </p>
                            <p className="header__side_text">
                                ТЁМНЫЕ ИСКАТЕЛИ ЗНАНИЙ
                        </p>
                            <button className="button green" onClick={this.changeVisibility}>
                                ЖМИ
                        </button>
                        <div className="header__side_hidden" hidden={this.state.hidden}>
                                <p className="header__side_text">
                                ТЁМНЫЕ ИСКАТЕЛИ ЗНАНИЙ:
                        </p>
                                <p className="header__side_number">130</p>
                                <div className="header__side_hidden_moved">
                                <p className="header__side_undertext">КОЛИЧЕСТВО<br/>
                                    ПРОЙДЕННЫХ КВЕСТОВ:</p>
                                    <p className="header__side_number">20</p> 
                                </div>
                                 
                            </div>
                            </div>
                            
                        </div>
                        <div className="header__side_bright">
                            <h2>СТОРОНЕ ТЫ?</h2>
                            <div className="header__side_content">
                            <p className="header__side_title">
                                СВЕТЛАЯ СТОРОНА
                        </p>
                            <p className="header__side_text">
                                СВЕТЛЫЕ ИСКАТЕЛИ ЗНАНИЙ
                        </p>
                            <button className="button green" onClick={this.changeVisibility}>
                                ЖМИ
                        </button>
                            <div className="header__side_hidden" hidden={this.state.hidden}>
                                <p className="header__side_text">
                                    СВЕТЛЫЕ ИСКАТЕЛИ ЗНАНИЙ:
                        </p>
                                <p className="header__side_number">150</p>
                                <div className="header__side_hidden_moved">
                                <p className="header__side_undertext">КОЛИЧЕСТВО<br/>
                                    ПРОЙДЕННЫХ КВЕСТОВ:</p>
                                    <p className="header__side_number">25</p> 
                                </div>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}