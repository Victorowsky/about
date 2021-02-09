import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Carousel.css"
import { Carousel } from 'react-responsive-carousel';

const CarouselComp = () => {
        return (
            <Carousel>
                <div>
                    <a href="https://victorowsky.github.io/watch/#/" target="_blank" rel="noopener noreferrer"></a>
                    <img src="https://imgur.com/Of1TP3X.png" />
                    <p className="legend" >Watch Together, connected with Twitch chat. Store data on MongoDB, and using Socket.io to emit events</p>
                    {/* <div className="underCarousel">Watch Together, connected with Twitch chat. Store data on MongoDB, and using Socket.io to emit events</div> */}
                </div>
                
                <div>
                    <img src="https://codefibers.pl/assets/blog/mongo.png" />
                    <p className="legend">Legend 1</p>
                </div>
                {/* <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
        );
    }


export default CarouselComp;