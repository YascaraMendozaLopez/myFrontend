import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme)=>({
    input:{
        display:"none",
    },
    star:{
        cursor: "pointer",
        transition: "color 200ms"
    },
    starInput:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));
export default styles;