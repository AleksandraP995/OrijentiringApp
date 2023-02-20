import { useEffect, useState } from "react";
import { query } from "../../queries/HeroImageQuery";
import { auth, contentfulUrl, contentType } from "../../queries/Connecting";
import "../../App.css";

export function HeroImageComponent()  {
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
          setPage(data.newsPageCollection.items[0]);
        });
    }, []);
  
    if(!page) {
      return <></>
    }

    return (
            <div className="container">
                <img src= {page.heroImage.url} alt = "logo" width= "100%" className="bg-main" /> 
                <p className="overlayHeader">{page.news}</p>
            </div>
    )
}

export default HeroImageComponent;
