
import { PlayerContentProps } from "../../models/AboutUsPage/PlayerContentProps";

export const PlayersComponent = (props: PlayerContentProps) => {
    console.log(props.fullName) 
    
    return (
        <div className = "col-12">
            {props.fullName}
        </div>
    )
}