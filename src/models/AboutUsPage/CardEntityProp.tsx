
export type Image = {
    url: string;
  };

export type CardEntityProp = {
    id: string;
    title: string;
    subtitle: string;
    autor: string;
    date: Date;
    image: Image;
    onClickHeartIcon : () => void;
    favorites: boolean;
  };