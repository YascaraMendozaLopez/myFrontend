import { makeStyles } from '@material-ui/core';
import mq from '../../../../config/mq';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "27px",
        backgroundColor: theme.palette.primary.main,
        [mq("xxs")]: {
            width: "439px"
        },
        [mq("md")]: {
            width: "864px"
        },
        [mq("xs")]: {
            width: "864px"
        },
        [mq("lg")]: {
            width: "439px"
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: "0px",
        },
    },
    title: {
        
        height: "53px",
        backgroundColor: theme.palette.secondary.light,
        fontFamily: "DMSans-Bold",
        fontSize: "20px",
        paddingLeft: "14px",
        width: "100%"
    },
    user: {
        display: "flex",
        justifyContent: "start",
        paddingLeft: "20px",
        height: "76px"
    },
    data: {
        fontFamily: "DMSans-Regular",
        paddingLeft: "20px",
        color: theme.palette.common.dark
    },
    name: {
        fontSize: "16px",
        marginBottom: "0",
    },
    date: {
        fontSize: "12px",
        marginTop: "0",
    },
    blockOpinion: {
        boxShadow: "0px 0px 2.14px 0.1px" + theme.palette.primary.dark,
        margin: "12px 24px auto 24px",
        borderRadius: "4.3px",
        height: "calc(50vh - 7.7vw)",
    },
    blockRating: {
        boxShadow: "0px 0px 2.14px 0.1px" + theme.palette.primary.dark,
        margin: "auto 24px auto 24px",
        borderRadius: "4.3px",
        height: "93px",

    },
    score: {
        fontFamily: "DMSans-Bold",
        fontSize: "20px",
        lineHeight: "26px",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.light,
        height: "55px",
        paddingLeft: "23px",
        width: "100%",
    },
    stars: {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "34px",
    },
    textOpinion:{
        margin: "18px 20px 18px 20px",
        width: "90%",
        height: "calc(100% - 33%)",
    },
    opinion: {
       textAlign: "justify",
    },
    textarea: {
        marginLeft:"10px",
        height: "100%",
        width: "95%",
        textAlign: "justify",
        fontFamily: "Poppins-Regular",
        border: "none",
        outline: "none",
        boxSizing: "border-box",
        overflow: "hidden",
        resize: "none",
        "-ms-overflow-style": "none",
    },
    buttons: {
        display: "flex",
        justifyContent: "space-evenly",
        height: "30px",
        justifyItems: "center",
        margin: "37px calc(90% - 80%) 37px calc(90% - 80%)",
    },
    button: {
        borderRadius: "8px",
        border: "none",
        fontSize: "13px",
        fontFamily: "Poppins-Regular",
        padding: "5px auto",
        width: "97px",
        color: theme.palette.primary.main,
        cursor: "pointer"
    },
    deleteButton: {
        backgroundColor: theme.palette.primary.contrastText,

    },
    editButton: {
        backgroundColor: theme.palette.common.black,
    },
    approveButton: {
        backgroundColor: theme.palette.secondary.contrastText,
    },
    subtitle: {
        fontFamily: "DMSans-Bold",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.light,
        height: "42px",
        paddingLeft: "23px",
        marginBottom: "0"
    },


}));
export default useStyles
