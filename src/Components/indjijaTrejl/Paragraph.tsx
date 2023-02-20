import { useEffect, useState } from "react";
import { auth, contentfulUrl, contentType } from "../../queries/Connecting";
import { query } from "../../queries/indjijaTrejlDetailsQuery";
import { text } from "../../models/PanelComponentText";
import { BsFillTelephoneFill } from "react-icons/bs";
import { contact, style } from "../../assets/style";
import {HiLocationMarker} from "react-icons/hi";

export const Paragraph = () => { 
    const [page, setPage] = useState<any>();

    useEffect(() => {
      window
        .fetch(contentfulUrl, {
          method: "POST",
          headers: {
            "Content-Type": contentType,
            Authorization: auth,
          },
          body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
          if (errors) {
            console.error(errors);
          }
          setPage(data.indjijaTrejlDetailsCollection.items[0]);
        });
    }, []);
  
    //<Link to={`/`} style= {{marginRight: 1200}} > <IoIosArrowBack size={iconSize} style={{ fill: iconColor }}/> </Link>

    if(!page) {
      return <></>
    }
   
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    {text}
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row"><div className="col-12"><b>Osnovne informacije</b></div></div>
            <br />
            <div className="row">
                <div className="col-2">
                    <BsFillTelephoneFill style = {style}/>
                </div>
                <div className="col-2">
                    <i>{contact}</i>
                </div>
                <div className="col-8"></div>
            </div>
            <br />
            <div className="row">
                <div className="col-2">
                    <HiLocationMarker style = {style}/>
                </div>
                <div className="col-6">
                    <i>{page.adresa}</i>
                </div>
                <div className="col-4"></div>
            </div>
            <br />
        </div>
        
    )
}