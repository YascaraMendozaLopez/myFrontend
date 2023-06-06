import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    wrapper:{
        display: 'flex',
        flexWrap: "nowrap",

        [theme.breakpoints.down("md")]: {
            display: 'flex',
            flexWrap: "wrap",
          },


    }

}));
export default useStyles;