import { connectToContentful } from "../../additional/helper";
import { ParagraphContentProps } from "../../models/AboutUsPage/ParagraphContentProps";
import {  findObject }  from "../../additional/helper";

const client = connectToContentful();

export const getParagraphContent = () => {

    const getTitleAndText = async (slug: string): Promise<ParagraphContentProps | undefined> => {
    
        try {
            const paragraphContentPropsObject = await client.getEntries()
            .then((response:any) => {
                
                const foundObj = findObject(response.items, slug);

                const text = foundObj['fields']['text'];
                const title = foundObj['fields']['title'];

                const paragraphContentProps : ParagraphContentProps = {
                    title: title,
                    text: text
                }
                return paragraphContentProps
            })
            .catch(console.error);
            return paragraphContentPropsObject!;

        } catch(err){
            console.log(`There was an error: ${err}`);
            
        }
    }
    return { getTitleAndText }
}



export default getParagraphContent;
