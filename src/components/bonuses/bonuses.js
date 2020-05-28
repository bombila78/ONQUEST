import React from 'react';

import image1 from '../../images/bonuses_answer1.png';
import image2 from '../../images/bonuses_answer2.png';
import image3 from '../../images/bonuses_answer3.png';
import image4 from '../../images/bonuses_answer4.png';
import image5 from '../../images/bonuses_answer5.png';
import image6 from '../../images/bonuses_answer6.png';



export default class Bonuses extends React.Component {

    state = {
        answer: "transparent"
    }

    onAnswerChange = (value) => {
        this.setState(() => {
            let newAnswer = `url(${value})`;
            return {
                answer: newAnswer
            }
        })
    }

    onTransparent = () => {
        this.setState(() => {
            return {
                answer: "transparent"
            }
        })
    }


    render() {

        const answerStyle = {
            background: this.state.answer
        }
        return (
            <div className="bonuses" >
                <div className="container">
                    <div className="bonuses__answer" style={answerStyle} onClick={this.onTransparent}>
                    </div>
                    <div className="bonuses__side">
                        <div className="bonuses__side_dark">
                            <h2>ДОПОЛНИТЕЛЬНЫЕ</h2>
                            <div className="bonuses__side_content">
                                <p className="bonuses__side_text">
                                    ВОПРОС ОТ
                                    ТЁМНОЙ СТОРОНЫ:
                              </p>
                                <p className="bonuses__side_title">
                                    НА КАКОЙ РЕЧКЕ СОСТОЯЛАСЬ
                                    ДУЭЛЬ ПУШКИНА?
                                </p>
                            </div>
                            <div className="bonuses__side_buttonGroup">
                                <button className="button green" onClick={() => this.onAnswerChange(image1)}>
                                    КРАСНАЯ
                                </button>
                                <button className="button yellow" onClick={() => this.onAnswerChange(image2)}>
                                    ЧЕРНАЯ
                                </button>
                                <button className="button viola" onClick={() => this.onAnswerChange(image3)}>
                                    СИНЯЯ
                                </button>
                            </div>

                        </div>
                        <div className="bonuses__side_bright">
                            <h2>БОНУСЫ В КВЕСТАХ</h2>
                            <div className="bonuses__side_content">
                                <p className="bonuses__side_text">
                                    ВОПРОС ОТ
                                    СВЕТЛОЙ СТОРОНЫ:
                        </p>
                                <p className="bonuses__side_title">
                                    ЧТО <br />НАЗЫВАЮТ “БЕЛЫМ
                                    ЗОЛОТОМ”?

                        </p>

                            </div>
                            <div className="bonuses__side_buttonGroup">
                                <button className="button green" onClick={() => this.onAnswerChange(image4)}>
                                    КРАСНАЯ
                                </button>
                                <button className="button yellow" onClick={() => this.onAnswerChange(image5)}>
                                    ЧЕРНАЯ
                                </button>
                                <button className="button viola" onClick={() => this.onAnswerChange(image6)}>
                                    СИНЯЯ
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
