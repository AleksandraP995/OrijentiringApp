import { pink } from "@mui/material/colors";

import { Z_FIXED } from "zlib";

export const darkGreen = "#3d7a4e";
export const localHost = "http://localhost:3000";
export const contact = "0669359355";
export const style = { color: darkGreen, fontSize: "1.5em" }
export const nav = {
    marginLeft: "30em", 
    color: "white",
    underline: "hover"
}

export const navLink = {
    color: "white",
    textDecoration: "bold",
    marginLeft: "1em",
    underline: "hover"
}

export const navbTN = {
    color: "white",
    textDecoration: "bold",
    marginLeft: "4em",
    "&:hover": { 
        color: "#3d7a4e !important",
        borderRadius: "5px"
    }
}
export const navBar = {
    backgroundColor: darkGreen
}

export const sendbTN = {
    color: "#3d7a4e",
    textDecoration: "bold",
    marginLeft: "4em",
    "&:hover": { 
        color: "#white !important",
        borderRadius: "5px"
    }
}


export const validationErrorsStyle = {
    color: darkGreen, 
    fontStyle: "italic",
    marginTop: "-2em", 
    marginBottom: "1em"
}

export const searchIconStyle = {
    fontSize: 40, 
    color: darkGreen, 
    backgroundColor: "#f5f3f2", 
        "&:hover": { 
            backgroundColor: "#3d7a4e !important", 
            color: "#f5f3f2", 
            borderRadius: "5px"
        }
}