import { HeroImageAboutUsProps } from "../../models/HeroImageAboutUsProps"
import "../../App.css";
export const HeroImageComponent = (props: HeroImageAboutUsProps) => {
    
    return (
            <div className="container">
                <img src= {props.imageUrl} alt = "logo" width= "100%" className="bg" /> 
                <p className="overlayHeader">{props.title}</p>
            </div>
    )
}