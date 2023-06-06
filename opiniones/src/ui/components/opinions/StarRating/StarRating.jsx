import { useState } from 'react';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import useStyles from './StarRating.styles';
const StarRating = ({ value, setValue }) => {

    const classes = useStyles();
    const [rating, setRating] = useState(value);
    const [hover, setHover] = useState(value);
    return (
        <div className={classes.starInput}>
            {
                [...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                        <label key={star}>
                            <input
                                className={classes.input}
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={
                                () => {setRating(ratingValue); setValue(ratingValue)}} />
                            {
                                ratingValue <= (hover || rating) ?
                                    //painted star
                                    <StarRoundedIcon
                                        sx={{ fontSize: 45, color: "#ffa800" }}
                                        className={classes.star}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)} /> :
                                    //unpainted star
                                    <StarOutlineRoundedIcon
                                        sx={{ fontSize: 45, color: "#BCBBBC" }}
                                        className={classes.star}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)} />
                            }

                        </label>
                    );
                })
            }
        </div>
    )
};
export default StarRating;