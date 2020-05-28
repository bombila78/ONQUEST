import React from 'react';

import VK from '../../images/footer_vk.png';
import Insta from '../../images/footer_insta.png';

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__playButton">
                        <button className="button big">
                            ИГРАТЬ
                        </button>
                    </div>
                    <div className="footer__subscribe row justify-content-between">
                        <div className="col-md-2">
                            <div className="footer__subscribe_social">
                                <div className="footer__subscribe_vk">
                                    <img src={VK} alt="VK" />
                                </div>
                                <div className="footer__subscribe_insta">
                                    <img src={Insta} alt="Instagram" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="footer__subscribe_form">
                                <form className="subscribe-form">
                                    <label htmlFor="email" className="email-label">ВВЕДИТЕ ВАШ EMAIL, ЧТОБЫ ВСЕГДА БЫТЬ В КУРСЕ ПОСЛЕДНИХ ОБНОВЛЕНИЙ</label>
                                    <div className="email-container">
                                        <input type="email" name="email" className="email-input" />
                                        <button type="submit" className="button viola">ПОДПИСАТЬСЯ</button>
                                    </div>
                                    <br />
                                    <input type="checkbox" name="agree" /> <label htmlFor="agree" className="agree-label">ДАЮ СОГЛАСИЕ НА <a href="/">ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ</a></label>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer__rights">
                        <div className="footer__rights_rights"><span className="footer__rights_mark">©</span>2020 ONQUEST. ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
                       <div className="footer__rights_link"><a href="/">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a></div> 
                    </div>
                </div>
            </footer>
        )
    }
}