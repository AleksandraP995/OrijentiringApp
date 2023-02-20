import * as contentful from "contentful";
import _ from "lodash";
import { NEXT_PUBLIC_SPACE_ID, NEXT_PUBLIC_DELIVERY_TOKEN, NEXT_PUBLIC_PREVIEW_TOKEN, NEXT_PUBLIC_ENVIRONMENT } from "../env";

export type optionsObject = {
    space: string,
    host: string | undefined,
    accessToken: string ,
    environment: string,
    resolveLinks: boolean
}

export type params = {
    content_type: any,
    include: number,
    fields : {
        slug: string | null
    }
}
const space_id = NEXT_PUBLIC_SPACE_ID; 
const access_token = NEXT_PUBLIC_DELIVERY_TOKEN;
const preview_token = NEXT_PUBLIC_PREVIEW_TOKEN;
const environment = NEXT_PUBLIC_ENVIRONMENT;

export const connectToContentful = () => {
    const client = contentful.createClient({
        space: NEXT_PUBLIC_SPACE_ID, //"1bf096ggcc0p",
        environment: NEXT_PUBLIC_ENVIRONMENT, //'Orijentiring',
        accessToken: NEXT_PUBLIC_DELIVERY_TOKEN //"4HFZKeK2Vegtd6mFum7amML8bGsV8yudvfT1GOJZG4w"
    })
    return client;
}

const getOptions = (is_preview: boolean) => {

    let options: optionsObject= {
        space: space_id!,
        host: is_preview ? "preview.contentful.com" : undefined,
        accessToken: is_preview ? preview_token! : access_token!,
        environment: environment ? environment : "master",
        resolveLinks: true
    };

    return options;
};



export const getAllLocales = async() => {

    const options = getOptions(false);
    const contentfulClient = contentful.createClient(options);
    try {
        let allLocales = await contentfulClient.getLocales();
        let dataType = _.get(allLocales, "sys.type");
        let items = _.get(allLocales, "items");
        if (dataType === "Array") {
            return items;
        } else {
            return false;
        }
    } catch (error) {
        console.log("getAllLocales error ", error);
    }

};

export const getEntriesByContentType = async(content_type:any, slug = null) => {
    
    const options = getOptions(false);

    try {
        const contentfulClient = contentful.createClient(options);
        if (contentfulClient) {
            
            let params: params = { 
                content_type: content_type, 
                include: 3, fields: 
                {slug: " "}
            }; 

            if (slug) {
                params.fields.slug = slug;
            }

            let entries = await contentfulClient.getEntries(params); 

            const items = _.get(entries, "items");

            return { items };
        } else {
            return false;
        }
    } catch (error) {
        console.log("any errors? ->", error);
        return false;
    }

};

export const findObject = (array: [], slugValue:string) => {

    const foundObj = array.filter((item: any) => item.fields.slug === slugValue)[0];
    return foundObj;

}

