import React from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';
import icon1 from '../../images/icon_1.png';
import icon2 from '../../images/icon_2.png';
import icon3 from '../../images/icon_3.png';
import icon4 from '../../images/icon_4.png';


setDefaultProps({
    visibleClassName: 'appear',
    percent: 0.1
});

export default class About extends React.Component {



    render() {

        return (
            <div className="about">
                <div className="container">
                    <div className="about__content row justify-content-around mb-5">
                        <div className="col-md-4">
                            <div className="about__content_card">
                                <OnVisible className="about__content_image">
                                    <img src={icon1} alt="plane" />
                                </OnVisible>
                                <div className="about__content_text">
                                    <div className="about__content_title">
                                        путешествия
                                        прямо из дома
                                </div>
                                    <div className="about__content_words">
                                        узнаем мир вместе прямо из дома
                                        либо закрепляем полученные
                                        знания
                                </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="about__content_card">
                                <OnVisible className="about__content_image">
                                    <img src={icon3} alt="bino" />
                                </OnVisible>
                                <div className="about__content_text">
                                    <div className="about__content_title">
                                        в одном квесте
                                        до 30 локаций
                                </div>
                                    <div className="about__content_words">
                                        есть возможность познакомиться с
                                        объектами города или страны
                                        с разных ракурсов
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__content row justify-content-around mb-5">
                        <div className="col-md-4">
                            <div className="about__content_card">
                                <OnVisible className="about__content_image">
                                    <img src={icon2} alt="lamp" />
                                </OnVisible>
                                <div className="about__content_text">
                                    <div className="about__content_title">
                                        знания
                                        в игровой форме
                                </div>
                                    <div className="about__content_words">
                                        загадки, ребусы, филворды, судоку,
                                        кроссворды, лабиринты, найди отличия,
                                        определи лишний предмет и тд.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about__content_card">
                                <OnVisible className="about__content_image">
                                    <img src={icon4} alt="cup" />
                                </OnVisible>
                                <div className="about__content_text">
                                    <div className="about__content_title">
                                        титулы
                                        за знания
                                </div>
                                    <div className="about__content_words">
                                        пройди квест и стань тёмным/светлым
                                        стражем, хранителем или легендой.
                                        более 50 званий
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

