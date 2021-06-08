import React, { useState, useEffect } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Dialog, Snackbar, CircularProgress } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateIcon from "@material-ui/icons/Create";
import "./ImgPicker.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ImgPicker(props) {
  const {
    onRecevieUrl,
    curImgUrl,
    onRecevieImg,
    index,
    validateMess,
    onChangeImg,
  } = props;
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [imgFile, setImgFile] = useState({
    invalidImage: "Please select image.",
  });

  useEffect(() => {
    if (curImgUrl) {
      if (curImgUrl !== "0") {
        setImgUrl(curImgUrl);
      }
    }
  }, [curImgUrl]);

  const imgHandle = (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) {
      setImgFile({ invalidImage: "Please select image." });
      setImgUrl("");
      setOpen(false);
      return false;
    }
    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setImgFile({ invalidImage: "Please select valid image." });
      setImgUrl("");
      setOpen(false);
      return false;
    }
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImgUrl(reader.result);
      setImgFile({ invalidImage: null });
      setOpen(true);
      // if (onRecevieUrl) {
      //   onRecevieUrl(e.target.files[0], index);
      // }
    };
    if (onChangeImg) {
      onChangeImg(e.target.files[0], index);
    }

    // if (onRecevieImg) {
    //   onRecevieImg(e.target.files[0], index);
    // }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenDialog(false);
  };

  const handleShowImg = () => {
    setOpenDialog(true);
  };

  const imgDeaultUrl =
    "https://yesoffice.com.vn/wp-content/themes/zw-theme//assets/images/default.jpg";
  return (
    <div className="img-choose">
      {/* <CircularProgress /> */}
      <div className="img-container">
        <div className="img-view-option">
          <label htmlFor={`file${index}`}>
            <CreateIcon />
          </label>
          <input
            type="file"
            name="file"
            id={`file${index}`}
            onChange={imgHandle}
          />
          {imgUrl ? (
            <span className="eyes" onClick={handleShowImg}>
              <VisibilityIcon />
            </span>
          ) : null}
        </div>
        <img
          className="img-product"
          src={imgUrl ? imgUrl : imgDeaultUrl}
          alt=""
        />
      </div>
      <p style={{ color: "red" }}>{imgFile.invalidImage}</p>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Image valid !!!
        </Alert>
      </Snackbar>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={openDialog}
      >
        {imgUrl ? <img className="img-product" src={imgUrl} alt="" /> : null}
      </Dialog>
    </div>
  );
}

export default ImgPicker;
