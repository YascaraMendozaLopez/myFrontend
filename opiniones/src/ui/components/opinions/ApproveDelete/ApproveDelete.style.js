import { makeStyles } from '@material-ui/core';
import mq from '../../../../config/mq'

const useStyles = makeStyles((theme) => ({

    wrapper: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.common.black + "80",
        top: "0px",
        left: "0px",        
        "&::after": {
            filter: "blur(100px)"
        },
        [mq("xs")]: {
            width: "100%",
            position: "fixed",
        },
    },
    
    modal: {
        [mq("xs")]: {
            width: "90%"
        },
        [mq("md")]: {
            width: "400px"
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        boxShadow: "0px 0px 2.14px 0.1px" + theme.palette.primary.dark,
        position: "relative ",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "8px",
    },
    close: {
        cursor: "pointer",
        display: "flex",
        justifyContent: "right",
        padding: "13px",
    },
    icon: {
        display: "flex",
        justifyContent: "center",
    },
    text: {
        fontFamily: "DMSans-Regular",
        fontSize: "25px",
        textAlign: "center",
    },
    deleteOpinion:{
        display: "flex",
        justifyContent: "center",
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
    ok:{
        backgroundColor: theme.palette.secondary.contrastText,
    },
    cancel:{
        backgroundColor: theme.palette.primary.contrastText,

    }

}));

export default useStyles;
