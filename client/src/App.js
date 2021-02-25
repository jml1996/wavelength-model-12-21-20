import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as tf from "@tensorflow/tfjs";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import * as automl from "@tensorflow/tfjs-automl";
import { add, model } from '@tensorflow/tfjs';
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import ImageCard from './components/ImageCard';
import Identifier from './components/Identifier';

import { createMuiTheme } from '@material-ui/core/styles';

import { Button } from '@material-ui/core/';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import InnerHTML from 'dangerously-set-html-content';

import * as Scroll from 'react-scroll';
import { Link as scrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { CartContext } from './contexts/CartContext';

import A19 from './static/A19.jpeg';
import BR2040 from './static/BR2040.jpeg';
import MR16 from './static/MR16.jpeg';
import PAR203038 from './static/PAR203038.jpeg';
import R20 from './static/R20.jpeg';
import T5T8 from './static/T5T8.jpeg';

// const imagesObj = {
//   "MR16": MR16,
//   "A19": A19,
//   "R20": R20,
//   "BR2040": BR2040,
//   "PAR203038": PAR203038,
//   "T5T8": T5T8
// }

const initialCart = {
  "MR16": 0,
  "A19": 0,
  "R20": 0,
  "BR2040": 0,
  "PAR203038": 0,
  "T5T8": 0
}

function App() {
  // const [mostLikely, setMostLikely] = useState("");
  // const [secondMostLikely, setSecondMostLikely] = useState("");
  // const [uploadedImg, setUploadedImg] = useState(false);
  const [cart, setCart] = useState(initialCart);
  // const [homepage, setHomepage] = useState(false);
  
  // console.log(homepage)

  // function scrollMore() {
  //   scroll.scrollMore(100);
  // }

  // var loadFile = function(event) {
  //   var image = document.getElementById('output');
  //   image.src = URL.createObjectURL(event.target.files[0]);

  //   setUploadedImg(true);
  //   run();
  // };

  // async function run() {
  //   const model = await automl.loadImageClassification('model.json');

  //   console.log(model);

  //   const image = document.getElementById('output');
  //   const predictions = await model.classify(image);
  //   console.log(predictions);

  //   const maxProb = predictions.reduce((prev, current) => (prev.y > current.y) ? prev : current);
  //   console.log(maxProb);
  //   setMostLikely(maxProb);

  //   const notFirstPlace = predictions.filter(obj => obj != maxProb);
  //   console.log(notFirstPlace);

  //   const secondPlace = notFirstPlace.reduce((prev, current) => (prev.y > current.y) ? prev : current);
  //   console.log(secondPlace);

  //   setSecondMostLikely(secondPlace);
  // }

  const addItem = item => {
    console.log(item)
    setCart({
      ...cart,
      [item.label]: cart[item.label] + 1
    })
	};

  return (
  <div className="App">
    <CartContext.Provider value={{ cart, addItem }}>
      <Router>
        <NavBar />
        {/* <div className="hero-text">
          <h3>Upload a picture of your bulb to see what type it is! </h3>
          <Button variant="contained" component="label" color="white">
            Upload
            <input type="file"  accept="image/*" name="MuiInput" id="file"  onChange={loadFile} style={{ display: "none" }} />
          </Button>
          <br />
          <br />
          {
            uploadedImg 
            ? 
            <Card>
                  <CardMedia 
                    component="img"
                    id="output" 
                    alt="output" 
                    style={{visibility: "visible"}}
                  />
            </Card>
            :
            <Card style={{visibility: "hidden"}}>
                  <CardMedia 
                    component="img"
                    id="output" 
                    alt="output"
                  />
            </Card>
            // <p><img id="output" width="200" alt="output" style={{visibility: "hidden"}} /></p>
            // <p><img id="output" width="200" alt="output" style={{visibility: "visible"}} /></p>
          }
          <br />
          <ImageCard 
            uploadedImg={uploadedImg} 
            mostLikely={mostLikely}
            secondMostLikely={secondMostLikely} 
            imagesObj={imagesObj}
            addItem={addItem}
          />
        </div> */}
        <Switch>
          <Route exact path="/" component={Identifier} />
          <Route path='/about' component={() => { window.location = 'https://www.wavelengthlighting.com/blog/2020/10/8/when-data-science-meets-lighting-how-wavelength-built-bulb-detection'; return null;} }/>
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>      
    </CartContext.Provider>
  </div>
  );
}

export default App;
