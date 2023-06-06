import OpinionDetail from './OpinionDetail/OpinionDetail';
import OpinionEdit from './OpinionEdit/OpinionEdit';
import { useState } from 'react';
import useStyles from './OpinionDetailEdit.styles';
const OpinionDetailEdit = () => {
    const classes = useStyles();
    const [rating, setRating] = useState(4);
    const handlechangeRating = (newRating) => {
        setRating(newRating);
    }

    return (
        <div className={classes.wrapper}>
            <OpinionDetail rating={rating} />
            <OpinionEdit
                rating={rating}
                onChangeRating={handlechangeRating} />
        </div>
    );
};

export default OpinionDetailEdit;