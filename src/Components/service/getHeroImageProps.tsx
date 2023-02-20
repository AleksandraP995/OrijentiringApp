import { connectToContentful } from "../../additional/helper";
import { HeroImageAboutUsProps } from "../../models/HeroImageAboutUsProps";
import {  findObject }  from "../../additional/helper";

const client = connectToContentful();

const getHeroImageProps = () => {
    
    const getImageAndTitle = async (slug: string): Promise<HeroImageAboutUsProps | undefined> => {
    
        try {
            const heroComponentPropsObject = await client.getEntries()
            .then((response:any) => {
                //console.log(response);
                
                const foundObj = findObject(response.items, slug);

                const heroImageStr = foundObj['fields']['heroImage']['fields']['file']['url'];
                const title = foundObj['fields']['title'];

                const heroComponentProps : HeroImageAboutUsProps = {
                    imageUrl: heroImageStr,
                    title: title
                }
                return heroComponentProps
            })
            .catch(console.error);
           return heroComponentPropsObject!;

        } catch(err){
            console.log(`There was an error: ${err}`);
            
        }
    }

    return { getImageAndTitle }
}



export default getHeroImageProps;