import { text } from "../../models/PanelComponentText";
import { geoMap } from "../../assets/geolocation/IndjijaTrail";
import { useEffect, useState } from "react";
import { auth, contentfulUrl, contentType } from "../../queries/Connecting";
import { query } from "../../queries/indjijaTrejlDetailsQuery";
import { Paragraph } from "./Paragraph";

export const PanelComponent = ( ) => {
    
    
    return (
        <div>
            <div className="row">
                <div className="col-3">
                
                </div>
                <div className="col-3"><Paragraph/></div>
                <div className="col-3">{geoMap}</div>
            </div>
        </div>
    )
}