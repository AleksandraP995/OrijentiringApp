import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ExpandMore } from './ExpandMore';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//import Link from '@mui/joy/Link';
import "../../../App.css";
import { darkGreen, localHost } from "../../../assets/style";
import { CardEntityProp } from '../../../models/AboutUsPage/CardEntityProp';;


export function CardComponent(props: CardEntityProp): JSX.Element  {
    
    const [expanded, setExpanded] = React.useState(false);

    const [isFavourite, setIsFavourite] = React.useState(props.favorites);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    const handleFavoritesClick = () => {
        setIsFavourite(!isFavourite); 
    };


    return(
        <div>
            <Card  sx={{ maxWidth: 350, margin: ".5em"}} > 
                <CardHeader
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                    }
                    
                    title= {<Link to={`/${props.id}`} style = {{textDecoration: "none", color: darkGreen}}>{props.title}</Link>} 
                    //textDecorationColor: "gray"
                    subheader= {props.subtitle}
                /> 
                <div className='img-container'>
                    <CardMedia
                        className="image"
                        component="img"
                        height="194"
                        image= {props.image.url}
                        alt= {props.title}
                    />
                </div>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" paragraph>
                       {/* <i style = {{width: "100%"}}> {props.autor} | {props.date}</i>  */}
                      {/* {props.autor} | {props.date} resiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii*/} 
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites"  
                        onClick = {props.onClickHeartIcon}  
                    >
                        <FavoriteIcon
                            onClick = {handleFavoritesClick}
                            style={{ color: isFavourite ? "darkGreen" : "grey"}}
                        />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>More Info:</Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet. 
                        <Link color="success" to="/:id">Official page</Link> 
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
      )

}

export default CardComponent;

   