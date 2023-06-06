import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import useStyles from './Score.style';

const Score = ({value}) => {
    const classes = useStyles();

    return (
        <div className={classes.stars}>
            {
                [...new Array(5)].map((star, index) => {
                    return index < value ? 
                    <StarRoundedIcon key={index} sx={{fontSize:25}}  className={classes.star}/> : 
                    <StarOutlineRoundedIcon key={index} sx={{fontSize:25}} className={classes.star}/>
                })
            }

        </div>
    );
}
export default Score;