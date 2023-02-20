import { Link } from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import { useState } from "react";
import ModalComponent from "../../Navbar/Modal";
import FavoritesModalComponent from "./FavoritesModal";
export const iconSize = 20;
export const iconColor = "gray";


export const FavoritesList = (props: any) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    
    return (
        <div>
                <i style = {{fontWeight: "36px"}} onClick={() => openModal()}><b>
                    My favorites List ({props.favorites.length})
                </b></i>
            <div>
            <FavoritesModalComponent
                showModal ={showModal}
                openModal = {openModal}
                closeModal = {closeModal}
                favorites = {props.favorites}
            />
            </div>
        </div>
    )
}