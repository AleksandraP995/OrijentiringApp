import { useReducer, useState } from "react";
import { setValues } from "./setValues";


export const setImage = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Image, payload });
export const setTitle = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Title, payload });
export const setTitlePargraph = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Title_Paragraph, payload });
export const setTextParagraph = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Text_Paragraph, payload });
export const setTitleImageParagraph = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Title_Image_Paragraph, payload });
export const setTextImageParagraph = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Text_Image_Paragraph, payload });
export const setImageUrlImageParagraph = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Image_Url_Image_Paragraph, payload });
export const setTitleImageParagraphTwo = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Title_Image_Paragraph_Two, payload });
export const setTextImageParagraphTwo = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Text_Image_Paragraph_Two, payload });
export const setImageUrlImageParagraphTwo = (dispatch:any, payload:any) => dispatch({ type: setValues.set_Image_Url_Image_Paragraph_Two, payload });
export const setFullNameArr = (dispatch:any, payload:any) => dispatch({ type: setValues.set_FullName_Arr, payload });







   

