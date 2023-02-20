import { CardsPanel } from "./CardsPanelComponent/CardsPanel"
import HeroImageComponent from "./HeroImageComponent"

export const NewsPageComponent = () => {
    return (
        <div>
            <div className= "row">
                <div className='col-12 heroImageContainer'>
                    <HeroImageComponent/>
                </div>
            </div>
        <br />
        <br />
        
            <div className="row">
                    <CardsPanel/> 
            </div>
        </div>
    )
}