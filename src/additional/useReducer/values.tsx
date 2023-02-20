
import { setValues } from "./setValues";

export const reducer = (state:any, action:any) => {
    const { type, payload } = action;
    
    switch (type) {
        case setValues.set_Image:
            return { ...state, image: payload };
        case setValues.set_Title:
            return { ...state, title: payload };
        case setValues.set_Title_Paragraph:
            return { ...state, titleParagraph: payload };
        case setValues.set_Text_Paragraph:
            return { ...state, textParagraph: payload };
        case setValues.set_Title_Image_Paragraph:
            return { ...state, titleImageParagraph: payload };
        case setValues.set_Text_Image_Paragraph:
            return { ...state, textImageParagraph: payload };
        case setValues.set_Image_Url_Image_Paragraph:
            return { ...state, imageUrlImageParagraph: payload };
        case setValues.set_Title_Image_Paragraph_Two:
            return { ...state, titleImageParagraphTwo: payload };
        case setValues.set_Text_Image_Paragraph_Two:
            return { ...state, textImageParagraphTwo: payload };
        case setValues.set_Image_Url_Image_Paragraph_Two:
            return { ...state, imageUrlImageParagraphTwo: payload };
        case setValues.set_FullName_Arr:
            return { ...state, fullNameArr: payload };
        default:
            return state;
    }
  }