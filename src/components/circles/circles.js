import React from 'react';

const Circles = () => {
    return (
        <div className="circles">
            <div className="container">
                <div className="circles__circles row">
                    <div className="col-md-2">
                        <div className="circles__circles_white">
                            <div className="circles__circles_purple">
                                1
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="circles__circles_white">
                            <div className="circles__circles_purple center">
                                2
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="circles__circles_white">
                            <div className="circles__circles_purple">
                                3
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circles__text">
                    квест<span>+</span>экскурсия<span>+</span>игра
                </div>
            </div>
        </div>
    )
}

export default Circles;