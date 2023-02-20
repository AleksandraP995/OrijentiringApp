import { useEffect, useState } from "react";
import { query } from "../../../queries/CardPaneQuery";
import CardComponent from "./Card";
import { contentfulUrl, auth, contentType } from "../../../queries/Connecting";
import SearchFormComponent from "./SearchForm";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { searchIconStyle } from "../../../assets/style";
import { CardEntityProp } from "../../../models/AboutUsPage/CardEntityProp";
import toast, { Toaster } from "react-hot-toast";
import { FavoritesList } from "../FavoritesComponent/FavoritesList";
import { Link } from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import "../../../App.css";
import { logDOM } from "@testing-library/react";


export const iconSize = 20;
export const iconColor = "gray";


export function CardsPanel(): JSX.Element  {
  
    const [isShown, setIsShown] = useState(false);
    const [page, setPage] = useState<any>();
    const { search } = window.location;
    const queryNew = new URLSearchParams(search).get('s') || "";
    const [searchQuery, setSearchQuery] = useState(queryNew || "");

    const [favourites, setFavourites] = useState<any>([]); //CardEntityProp[]
    const [isFavourite, setIsFavourite] = useState(false);

    const handleExpand = (event: any)=> {
      setIsShown(current => !current);
    };
  
    useEffect(() => {
        window
          .fetch(contentfulUrl, {
            method: "POST",
            headers: {
              "Content-Type": contentType,
              Authorization: auth,
            },
            body: JSON.stringify({ query }),
          })
          .then((response) => response.json())
          .then(({ data, errors }) => {
            if (errors) {
              console.error(errors);
            }
            console.log(data);
            setPage(data.newsPageCollection.items[0]);
          });
      }, []);
      

      const addToFavorites = (cardEntity:any) => {
        
        if (!favourites.includes(cardEntity)) {
          toast.success("Added to favourites");
          setFavourites([...favourites, cardEntity]);  
          setIsFavourite(true);
        } else {
          toast.success("Removed from favourites");
          setFavourites([...favourites.filter((item: any) => item !== cardEntity)]);
          setIsFavourite(false);
        }
      }

      const goToPage = (id: string) => {

      }
    
      if(!page) {
        return <></>
      }
      
    return(
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            success: {
              duration: 3000,
              iconTheme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <div className="row">
          <div className="col-2" id="searchContainer">
            <SearchOutlinedIcon onClick = {handleExpand} className="searchIcon" color="action" 
            sx= {searchIconStyle} /> 
            </div>
            <div className="col-2" id="searchBar">
            { isShown && <SearchFormComponent
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                
              />
            }
          </div>
          <div className="col-6"></div>
          <div className="col-2">

            <FavoritesList favorites = {favourites} /> 
          </div>
        </div>
        <br />
        <br />
        <div className="row" id = "cardContainer">
                {page.cardComponentCollection.items
                    .filter((card:any) => 
                      card.title.includes(queryNew)) 
                    .map((card: any) => (
                        <div className="col-3" id = "cardItem"> 
                            <CardComponent
                                id = {card.id}
                                title = {card.title}
                                subtitle = {card.subtitle}
                                image = {card.image}
                                date = {card.date}
                                autor = {card.autor}
                                onClickHeartIcon = {() => addToFavorites(card)}
                                favorites = {isFavourite}
                            />
                        </div>
                          
                ))}
        </div>

    </div>
         
    )
}

