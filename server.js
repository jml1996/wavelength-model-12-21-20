// const modelJSON = require('./client/src/model.json');

// // const dictTXT = require('./client/src/api/dict.txt');
// // const oneOfSix  = require('./client/src/api/group1-shard1of6.bin')
// // const twoOfSix  = require('./client/src/api/group1-shard2of6.bin')
// // const threeOfSix  = require('./client/src/api/group1-shard3of6.bin')
// // const fourOfSix  = require('./client/src/api/group1-shard4of6.bin')
// // const fiveOfSix  = require('./client/src/api/group1-shard5of6.bin')
// // const sixOfSix  = require('./client/src/api/group1-shard6of6.bin')

// const express = require("express");
// const bodyParser = require("body-parser");
// const CORS = require("cors");

// const app = express();

// app.use(bodyParser.json());
// app.use(CORS());

// let modelObj = modelJSON;

// app.get("/", (req, res) => {
//   console.log(modelObj);
//   res.send(modelObj);
// });

// // app.get("/dict.txt", (req, res) => {
// //   // console.log(modelObj);
// //   res.send(dictTXT);
// // });
// // app.get("/group1-shard1of6.bin", (req, res) => {
// //   // console.log(modelObj);
// //   res.send(oneOfSix);
// // });
// // app.get("/group1-shard2of6.bin", (req, res) => {
// //   // console.log(modelObj);
// //   res.send(twoOfSix);
// // });
// // app.get("/group1-shard3of6.bin", (req, res) => {
// //   // console.log(modelObj);
// //   res.send(threeOfSix);
// // });
// // app.get("/group1-shard4of6.bin", (req, res) => {
// //   // console.log(modelObj);
// //   res.send(fourOfSix);
// // });
// // app.get("/group1-shard5of6.bin", (req, res) => {
// //   // console.log(modelObj);
// //   res.send(fiveOfSix);
// // });
// // app.get("/group1-shard6of6.bin", (req, res) => {
// //   // console.log(modelObj);
// //   res.send(sixOfSix);
// // });

// app.listen(5000, () => {
//   console.log("Server listening on port 5000");
// });


const tf = require("@tensorflow/tfjs-node");
const automl = require("@tensorflow/tfjs-automl");
const fs = require("fs");

const model_url = "file:///Users/joshualovins/wavelength-model-12-21-20/client/src/model.json";
const image = "file:///Users/joshualovins/wavelength-model-12-21-20/client/src/static/image.jpeg";

if (!image) {
  throw new Error("missing argument: path to image");
}

// const image = fs.readFileSync(image_path);
// const decoded_image = tf.node.decodeJpeg(image);

async function run() {
  const model = await automl.loadImageClassification(model_url);
  const predictions = await model.classify(image);

  console.log(predictions);
}

run().catch(console.error);