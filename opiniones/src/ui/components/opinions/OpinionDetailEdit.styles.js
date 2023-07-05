import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq.js";
const useStyles = makeStyles((theme) => ({
    wrapper:{
        display: "flex",
        flexWrap: "nowrap",
        marginLeft:"30px",
        [mq("xxs")]: {
            width: "100%",
            flexWrap: "wrap",

          },
        [mq("xs")]: {
            width: "375px",
            display: 'flex',
            justifyContent: "center",
            flexWrap: "wrap",
          },
          [mq("sm")]: {
            width:"95%",
            flexWrap: "wrap",
            display: "flex",
            marginLeft: "20px"
        },

    }

}));
export default useStyles;