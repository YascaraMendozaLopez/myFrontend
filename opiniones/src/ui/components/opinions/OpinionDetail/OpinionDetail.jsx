import useStyles from "./OpinionDetail.styles";
import product from "../../../../assets/img/product.svg";
import Score from "../Score/Score";
//import StarRating from "../StarRating/StarRating";
const OpinionDetail = ({opinion,onChangeOpinion,rating}) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.titleInfo}>
                <p >Información del producto</p>
            </div>

            {/* PRODUCT*/}
            <div className={classes.product}>
                {/* IMAGE PRODUCT*/}
                <div className={classes.productDetail}>
                    <div className={classes.imageProduct}>
                        <img src={product} alt="product" />
                    </div>
                    <div className={classes.allProduct}>
                        {/* INFORMATION OF PRODUCT*/}
                        <div >
                            <p className={classes.nameProduct}>Lorem ipsum</p>
                            <label>
                                ID: < input type="text" className={classes.idProduct} value="12548963" readOnly />
                            </label>
                            <p className={classes.priceProduct}>625,95 $</p>
                        </div>

                        {/* RATING PRODUCT*/}
                        <div className={classes.rating}>
                            <Score value ={rating}/>
                        </div>
                        {/* DIMENCIONS OF PRODUCT*/}
                        <div className={classes.titleDimensions}>
                        <p >Dimensiones</p>
                        </div>
                        <div className={classes.dimensions}>
  
                            <label  className={classes.dimensionsValues}>
                                Altura:<input className={classes.dim} type="text" value="17,5 CM" readOnly />
                            </label>
                            <label  className={classes.dimensionsValues}>
                                Largo:<input className={classes.dim} type="text" value="10,7 CM" readOnly />
                            </label>
                            <label  className={classes.dimensionsValues}>
                                Ancho:<input className={classes.dim} type="text" value="0,7 CM" readOnly />
                            </label>
                            <label  className={classes.dimensionsValues}>
                                Peso:<input className={classes.dim} type="text" value="300 g" readOnly />
                            </label>

                        </div>
                    </div>
                </div>


                {/* DESCRIPTION OF PRODUCT*/}
                <div className={classes.blockDescription}>
                    <p className={classes.titleDescription}>Description</p>
                    <p className={classes.textDescription}>
                        Lorem ipsum dolor sit amet,   consectetur adipiscing elit. Integer ullamcorper, tellus at aliquam mollis, mi lorem pretium turpis, sed facilisis nisi elit vitae dui. Suspendisse at feugiat ligula. Ut feugiat leo sed risus tempor dignissim
                    </p>

                </div>
            </div>
        </div>
    )
};

export default OpinionDetail;