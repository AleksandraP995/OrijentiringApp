import { connectToContentful, findObject } from "../../additional/helper";

const client = connectToContentful();

export const getFullNamesPlayerProps = () => {
        const getPlayersFullNames = async () => {

            try {
                const fullNamesPlayerPropsObject = await client.getEntries()
                .then((response:any) => {
                    const foundObjArr = response.items.filter((item:any) => item.fields.fullName);
                    const fullNamesArr = [... new Set(foundObjArr)]
                    
                    return fullNamesArr;
                })
                .catch(console.error);
               return fullNamesPlayerPropsObject!;
    
            } catch(err){
                console.log(`There was an error: ${err}`); 
            }
        }
    return { getPlayersFullNames }
}