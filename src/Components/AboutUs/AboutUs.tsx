import { useEffect, useReducer } from "react";
import getHeroImageProps from "../service/getHeroImageProps";
import { getImageParagraphContent } from "../service/getImageParagraphContentProps";
import getParagraphContent from "../service/getParagraphContent";
import { HeroImageComponent } from "./HeroImageComponent";
import { ParagraphComponent } from "./ParagraphComponent";
import { ImageParagraphComponent } from "./ImageParagraphComponent";
import { getFullNamesPlayerProps } from "../service/getFullNamesPlayerProps";
import { SlugValues } from "../../assets/enums";
import "../../App.css"
import { reducer } from "../../additional/useReducer/values";
import { setFullNameArr, setImage, setImageUrlImageParagraph, setImageUrlImageParagraphTwo, setTextImageParagraph, setTextImageParagraphTwo, setTextParagraph, setTitle, setTitleImageParagraph, setTitleImageParagraphTwo, setTitlePargraph } from "../../additional/useReducer/actions";
import { initialState } from "../../additional/useReducer/initialState";
import { PlayersComponent } from "./PlayersComponent";

//import { initialState } from "../../additional/useReducer/initialState";

export const AboutUsComponent = () => {
    const [contentfulData, dispatch] = useReducer(reducer, initialState);
    const arr: any[] = []
    
    const { getImageAndTitle } = getHeroImageProps();
    const { getTitleAndText }  = getParagraphContent();
    const { getImageTitleAndText } = getImageParagraphContent();
    const { getPlayersFullNames } = getFullNamesPlayerProps();

    useEffect(() => {
        getImageAndTitle(SlugValues.imageAndTitleVal1).then(data => {
            setImage(dispatch, data?.imageUrl as string);
            setTitle(dispatch, data?.title as string)
        });   
        getTitleAndText(SlugValues.titleAndTextVal1).then(data => {
            setTitlePargraph(dispatch, data?.title as string);
            setTextParagraph(dispatch, data?.text as string);   
        })
        getImageTitleAndText(SlugValues.imageTitleAndTextVal1).then(data => {
            setTitleImageParagraph(dispatch, data.title as string);
            setTextImageParagraph(dispatch, data.text as string);
            setImageUrlImageParagraph(dispatch, data.imageUrl as string);
        })
        getImageTitleAndText(SlugValues.imageTitleAndTextVal2).then(data => {
            setTitleImageParagraphTwo(dispatch, data.title as string as string);
            setTextImageParagraphTwo(dispatch, data.text as string);
            setImageUrlImageParagraphTwo(dispatch, data.imageUrl as string);
        })
        getPlayersFullNames().then(
            (data: any) => {
                console.log(data);
                data.map((data :any) => {
                    arr.push(data.fields.fullName);
                    console.log(arr);
                    
                    setFullNameArr(dispatch, [...contentfulData.fullNameArr, arr])     
            })
        }); 
    }, [initialState.fullNameArr]); 

    
    
    return (
        <div>
            <div className="row">
                    <HeroImageComponent
                        imageUrl={contentfulData.image}
                        title = {contentfulData.title}
                    />
            </div>  

            <br />
            <br />  

             <div className="row">
                <div className="col-3"></div>
                <div className="col-3">
                    <ParagraphComponent
                        title = {contentfulData.titleParagraph}
                        text = {contentfulData.textParagraph}
                    />
                </div>
                <div className="col-3"></div>
            </div>

            <br />
            <br />

            <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                    <ImageParagraphComponent
                        title = {contentfulData.titleImageParagraph}
                        text = {contentfulData.textImageParagraph}
                        imageUrl = {contentfulData.imageUrlImageParagraph}
                    />
                </div>
                <div className="col-4">
                    <ImageParagraphComponent
                            title = {contentfulData.titleImageParagraphTwo}
                            text = {contentfulData.textImageParagraphTwo}
                            imageUrl = {contentfulData.imageUrlImageParagraphTwo}
                    />
                </div>
                <div className="col-2"></div>
            </div> 

            <br />
            <br />

            <div className="playersPargraphStyle">
                <table className="table"
                    style={{ marginTop: 20,  maxWidth: "80em", margin: "auto"}}
                >
                    <thead>
                        <tr>
                            <td><b>Igraci</b></td>
                        </tr>
                    </thead>
                    <tbody> 
                        <div className="row" id = "cardContainer">
                            {contentfulData.fullNameArr.map((fullName: string) => (
                                <div className="col-12">
                                    <PlayersComponent 
                                    //key={slug} 
                                    fullName= {fullName}
                                    />
                                </div>
                        
                                
                            ))}
                        </div>
                    </tbody>
                </table>
            </div>
            
        </div> 
    
        
    )
}

export default AboutUsComponent;

