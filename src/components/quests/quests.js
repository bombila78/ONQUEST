import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import image from '../../images/slider_left_arrow.png';
import image1 from '../../images/slider_right_arrow.png';
import slide1 from '../../images/quests_background.png';
import slide2 from '../../images/quests_background2.png';
import slide3 from '../../images/quests_background3.png';

const Quests = () => {

    return (
        <div className="quests">
            <div className="quests__title">
                <div className="quests__title_text">ВАРИАНТЫ ЗАДАНИЙ</div>
            </div>
            <div className="container">
                <Carousel
                    slidesPerPage={1}
                    slidesPerScroll={1}
                    animationSpeed={1500}
                    itemWidth={1067}
                    draggable
                    infinite
                    centered
                    arrowLeft={<img src={image} alt="arrleft" />}
                    arrowRight={<img src={image1} alt="arrright" />}
                    addArrowClickHandler
                >
                    <img src={slide1} alt="slide 1" />
                    <img src={slide2} alt="slide 2" />
                    <img src={slide3} alt="slide 3" />
                </Carousel>

            </div>
        </div>

    )
}

export default Quests;