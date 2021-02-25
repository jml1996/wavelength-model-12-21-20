import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import A19 from '../static/A19.jpeg';
import BR2040 from '../static/BR2040.jpeg';
import MR16 from '../static/MR16.jpeg';
import PAR203038 from '../static/PAR203038.jpeg';
import R20 from '../static/R20.jpeg';
import T5T8 from '../static/T5T8.jpeg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const imagesObj = {
    "MR16": MR16,
    "A19": A19,
    "R20": R20,
    "BR2040": BR2040,
    "PAR203038": PAR203038,
    "T5T8": T5T8
}

    // {
    //     uploadedImg ? <p><img id="output" width="200" alt="output" style={{visibility: "visible"}} /></p>
    //     : <p><img id="output" width="200" alt="output" style={{visibility: "hidden"}} /></p>
    // }
    // {
    //     mostLikely && <div className="result" id="result">
    //     Your bulb is probably a {mostLikely.label}. 
    //     <br />
    //     Here is a picture of a {mostLikely.label}:
    //     <br />
    //     <br />
    //     <img onClick={() => addItem(mostLikely)} src={imagesObj[mostLikely.label]} alt="most likely bulb type"></img>
    //     {/* <div style={{ backgroundImage: `url(${imagesObj[mostLikely.label]})` }}>
            
    //     </div> */}
    //     <div onClick={scrollMore}>Scroll More</div>
    //     If it isn't a {mostLikely.label}, it may be a {secondMostLikely.label}. <br />
    //     Here is a picture of a {secondMostLikely.label}:
    //     <br />
    //     <br />
    //     <img onClick={() => addItem(secondMostLikely)} src={imagesObj[secondMostLikely.label]} alt="second most likely bulb type"></img>
    //     <p style={{fontSize: "small", textAlign: "left"}}>Note: this version of the bulb identifier model was trained on only six types of bulbs: 
    //         MR16, A19, R20, BR (including BR20 and BR40), 
    //         PAR (including PAR20 PAR30 and PAR38), and T (including T5 and T8). The bulb identifier
    //         will yield an output — a best guess — irrespective of whether your bulb falls within this set of 
    //         possible types.
    //     </p>
    //     </div>
    // }

export default function ImageCard(props) {
    const { uploadedImg, mostLikely, secondMostLikely, imagesObj, addItem } = props
    // const classes = useStyles();

    return (
        <div>
            {/* className={classes.root} */}
            <Card>
                {
                    mostLikely
                    &&
                        <CardActionArea>
                            <CardMedia 
                                component="img"
                                onClick={() => addItem(mostLikely)} 
                                src={imagesObj[mostLikely.label]} 
                                alt="most likely bulb type"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {mostLikely.label}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: "left"}}>
                                    Your bulb is probably a {mostLikely.label}.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                                <Button onClick={() => addItem(mostLikely)} size="small" color="primary">
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </CardActionArea>
                }
            </Card>
            <br />
            <Card>
                {
                    secondMostLikely 
                    &&
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            onClick={() => addItem(secondMostLikely)} 
                            src={imagesObj[secondMostLikely.label]} 
                            alt="second most likely bulb type"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {secondMostLikely.label}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: "left"}}>
                                If it isn't a {mostLikely.label}, it may be a {secondMostLikely.label}.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                            <Button onClick={() => addItem(secondMostLikely)} size="small" color="primary">
                                Add to Cart
                            </Button>
                        </CardActions>
                    </CardActionArea>
                }
            </Card>
            <br />
            <Card>
                {
                    mostLikely
                    &&
                    <p style={{fontSize: "small", textAlign: "left", padding: "10%"}}>
                        Note: this version of the bulb identifier model was trained on only six types of bulbs: 
                        MR16, A19, R20, BR (including BR20 and BR40), 
                        PAR (including PAR20 PAR30 and PAR38), and T (including T5 and T8). The bulb identifier
                        will yield an output — a best guess — irrespective of whether your bulb falls within this set of 
                        possible types.
                    </p>
                }
            </Card>
        </div>
    );
}
