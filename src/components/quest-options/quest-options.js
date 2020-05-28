import React from 'react';


const QuestOptions = () => {
    return (
        <div className="questOptions">
            <div className="container">
                <div className="questOptions__content row">
                    <div className="col-md-3">
                        <div className="questOptions__content_square">
                            <div className="questOptions__content_info first">
                                <p className="questOptions__content_title">КВЕСТЫ</p>
                                <div className="questOptions__content_text">
                                    <p>для детей</p>
                                    <span>5-7</span>лет
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="questOptions__content_square">
                            <div className="questOptions__content_info second">

                                <div className="questOptions__content_text">
                                    <p>для детей</p>
                                    <span>8-12 </span>лет
                                </div>
                                <p className="questOptions__content_title">КВЕСТЫ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="questOptions__content_square">
                            <div className="questOptions__content_info third">

                                <div className="questOptions__content_text">
                                    <p>для детей</p>
                                    <span>13-17</span>лет
                                </div>
                                <p className="questOptions__content_title">КВЕСТЫ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="questOptions__content_square">
                        <div className="questOptions__content_info fourth">
                                <p className="questOptions__content_title">КВЕСТЫ</p>
                                <div className="questOptions__content_text">
                                    <p>для</p>
                                    <span>ВЗРОСЛЫХ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuestOptions;