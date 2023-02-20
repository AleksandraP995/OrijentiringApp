import { useEffect, useState } from "react";
import { auth, contentfulUrl, contentType } from "../../queries/Connecting";
import { query } from "../../queries/CardCollectionQuery";
import { HeroImageComponentIdjija } from "./HeroImageComponent";
import { PanelComponent } from "./PanelComponent";


export const IndjijaTrejlComponent = () => {
  
    const [page, setPage] = useState<any>();

    const url = window.location.href;
    const rest = url.split("/").pop();

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
            const foundPage = data.cardCollection.items.find((it:any) => it.id === rest);
            if (errors) {
                console.error(errors);
              }
            setPage(foundPage); 
        });
    }, []);
  
    if(!page) {
      return <></>
    }
    console.log(page); //dobro

    const imageUrl = page.image.url;
    const title = page.title;

    return (
        <div>
            <HeroImageComponentIdjija
              imageUrl = {imageUrl}
              title = {title}
            />
          <div className="row">
            <PanelComponent/>
          </div>
      </div>
    )
}

export default IndjijaTrejlComponent;