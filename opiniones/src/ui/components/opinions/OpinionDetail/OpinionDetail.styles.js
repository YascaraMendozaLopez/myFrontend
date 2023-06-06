import { makeStyles } from '@material-ui/core';
import mq from '../../../../config/mq';

const useStyles = makeStyles((theme)=>({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: theme.palette.primary.main,
        [mq("xs")]: {
            width: "100%"
        },
        [mq("md")]: {
            width: "864px"
        },
    },
    titleInfo:{
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        fontFamily:"DMSans-Bold",
        height: "53px",
        paddingLeft: "14px",
        backgroundColor: theme.palette.secondary.light,


    },
    product: {
        display:"flex",
        flexDirection: "column",

    },
    productDetail:{
        display: "grid",
        justifyItems: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
         
    },
    imageProduct: {
        margin:"15px 15px 0"
    },
    allProduct: {
        margin:"15px 0 45px 33px",
        [mq("xxs")]: {
            width: "341px"
        },
        [mq("md")]: {
            width: "341px"
        },

    },
    nameProduct: {
        fontSize: "48px",
        fontFamily:"DMSans-Bold",
        margin: "0",
    },
    idProduct: {
        margin: "0",
        border: "none",
        outline: "none",
    },
    priceProduct: {
        fontFamily:"Alatsi-Bold",
        fontSize: "32px",
        margin:"0",
    },
    rating: {
        margin: "15px 0", 
        [mq("xxs")]: {
            width: "132px"
        },
        [mq("md")]: {
            width: "132px"
        },

    },
    titleDimensions: {
        display: "flex",
        justifyContent: "center",
        fontSize: "20px",
        fontFamily:"DMSans-Bold",
        paddingRight: "40px",

    },
    dimensions: {
        display:"grid",
        margin: "0",
        gridTemplateColumns:"50% 50%",  
        columnGap:"10px",
        [mq("xxs")]: {
            width: "305px"
        },
        [mq("md")]: {
            width: "333px"
        },
    },
    dimensionsValues: {
        display:"grid",
        gridTemplateColumns:"40% 50%", 
        border: "none",
        fontSize:"15px",
        fontFamily:"DMSans-Regular",
        color: theme.palette.secondary.dark,
    },
    dim:{
        border: "none",
        fontSize:"15px",
        fontFamily:"DMSans-Regular",
        outline: "none",
        color: theme.palette.secondary.dark
    },
   
    blockDescription:{
        margin: "10px 15px 20px 15px",
        boxShadow: "0px 0px 2.14px 0.1px" + theme.palette.primary.dark,
        borderRadius: "4.3px",     
    },
    titleDescription:{
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        fontFamily:"DMSans-Bold",
        height: "53px",
        paddingLeft: "18px",
        margin:"0",
        backgroundColor: theme.palette.secondary.light,

    },
    textDescription:{
        margin: "11px 12px 11px 12px",
        padding: "20px",
        textAlign: "justify",
        backgroundColor: theme.palette.secondary.light,
        
    }

}));
export default useStyles;