import { HeroImageComponentIdjijaProps } from "../../models/HeroImageComponentIdjijaProps"
import "../../App.css";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/images/01.jpg';
import image2 from '../../assets/images/19.jpg';
import image3 from '../../assets/images/20.jpg';
import image4 from '../../assets/images/21.jpg';


export const HeroImageComponentIdjija = (props : HeroImageComponentIdjijaProps ) => {

    return (
        <div>
            <Carousel>
              
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={image4} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}