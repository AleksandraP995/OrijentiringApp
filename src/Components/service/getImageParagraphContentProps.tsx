import { connectToContentful, findObject } from "../../additional/helper";
import { ImageParagraphContentProps } from "../../models/AboutUsPage/ParagraphContentProps";

const client = connectToContentful();

export const getImageParagraphContent = () => {

    const getImageTitleAndText = async (slug: string): Promise<any> => {
    
        try {
            const imageParagraphContentPropsObject = await client.getEntries()

            .then((response:any) => {

                const foundObj = findObject(response.items, slug);
                
                const title = foundObj['fields']['title'];
                const text = foundObj['fields']['text'];
                const imageUrl = foundObj['fields']['image']['fields']['file']['url'];

                const imageParagraphContentProps:ImageParagraphContentProps = {
                    title: title,
                    text: text,
                    imageUrl: imageUrl
                }
                return imageParagraphContentProps
            })
            .catch(console.error);
            return imageParagraphContentPropsObject!;

        } catch(err){
            console.log(`There was an error: ${err}`);
            
        }
    }
    return { getImageTitleAndText }
}

