import { makeStyles } from '@material-ui/styles';
import mq from '../../../../config/mq';

const useStyles = makeStyles((theme) => ({
    stars: {
        display: "flex",
        justifyContent: "space-between",
        [mq("xxs")]: {
            width: "100%"
        },
        [mq("md")]: {
            width: "100%"
        },

    },
    star:{
        color: "#ffa800"
    },

}));

export default useStyles;