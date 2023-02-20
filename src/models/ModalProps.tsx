export type ModalComponentProps = {
    showModal : boolean;
    openModal : () => void; 
    closeModal : () => void;
}

export type FavoritesModalProps = {
    showModal : boolean;
    openModal : () => void; 
    closeModal : () => void;
    favorites: any;
}