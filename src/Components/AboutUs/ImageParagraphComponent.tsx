import { ImageParagraphContentProps } from "../../models/AboutUsPage/ParagraphContentProps";

export const ImageParagraphComponent = (props: ImageParagraphContentProps) => {
    
    return(
        <div>
            <div className="row">
                <div className="col-12"><b>{props.title}</b></div> 
                {/* style = {{marginRight: "-10rem"}} */}
            </div>
            <div className="row">
                <div className="col-12"><b>{props.text}</b></div> 
            </div>
            <div className="row">
                <div className="col-12"><img src={props.imageUrl} alt="" /></div> 
            </div>
        </div>
    )
}