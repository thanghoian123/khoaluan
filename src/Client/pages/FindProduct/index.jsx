import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import useInterval from "@use-it/interval";
import "./style.css";
import * as APIs from "../../../asset/APIs";
import {
  Backdrop,
  CircularProgress,
  Dialog,
  makeStyles,
} from "@material-ui/core";
import ProductFind from "./ProductFind";
let classifier;

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function FindProduct(props) {
  const classes = useStyles();
  const URL = "https://teachablemachine.withgoogle.com/models/4Ks83O-HY/";

  const videoRef = useRef();
  const [openPopup, setOpenPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState();
  const [loaded, setLoaded] = useState(false);
  const [resultFind, setResultFind] = useState(null);

  useEffect(() => {
    classifier = ml5.imageClassifier(URL + "model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
        });
    });
  }, []);

  useInterval(() => {
    if (classifier) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results[0]);
      });
    }
  }, 500);

  const onFindProduct = () => {
    setOpen(true);
    const confidence = result.confidence;
    let name = result.label;
    if (confidence < 0.89) {
      name = "none";
    }

    APIs.findProductByName(name).then((resp) => {
      console.log(resp.data.dataResponse);
      setOpen(false);
      if (resp.data.dataResponse.sizeList <= 0) {
        alert("not match");
      } else {
        // log
        setResultFind(resp.data.dataResponse.list[0]);
        setOpenPopup(true);
      }
    });
  };

  return (
    <div className="wrapper">
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Dialog
        onClose={() => {
          setOpenPopup(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={openPopup}
      >
        <ProductFind ProductFind={resultFind} />
      </Dialog>
      <div className="video-container">
        <video
          ref={videoRef}
          // ref="videoRef"
          style={{ transform: "scale(-1, 1)", width: "fit-content" }}
          width="500"
          height="350"
        />
        <p>
          {result ? (result.confidence > 0.8 ? result.label : "none") : null}
        </p>
        <span className="btn-showvideo">Show Camera</span>
        <span className="btn-find" onClick={onFindProduct}>
          Find product
        </span>
      </div>
    </div>
  );
}

export default FindProduct;
