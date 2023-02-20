import {  ParagraphContentProps } from "../../models/AboutUsPage/ParagraphContentProps";

export const ParagraphComponent = (props: ParagraphContentProps) => {

    return(
        <div className="row">
            <div className="col-6" style = {{marginRight: "-10rem"}}><b>{props.title}</b></div>
            <div className="col-6">{props.text}</div>
           
        </div>
    )
}