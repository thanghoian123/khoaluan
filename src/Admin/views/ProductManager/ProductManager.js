import {
  Backdrop,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  makeStyles,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import GridContainer from "Admin/components/Grid/GridContainer";
import GridItem from "Admin/components/Grid/GridItem";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import React, { useEffect, useState } from "react";
import { FastField, Field, Form, Formik } from "formik";
import CustomSelect from "Admin/components/CustomSelect/CustomSelect.js";
import ImgPicker from "Admin/components/ImgPicker/ImgPicker.js";
import * as yup from "yup";
import { storage } from "Admin/firebase/index.js";
import * as APIs from "../../../asset/APIs";
import { useParams } from "react-router";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ProductManager() {
  const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
    },
    backdrop: {
      zIndex: 100,
      color: "#fff",
    },
    slideContainer: {
      display: "flex",
    },
  };

  const useStyles = makeStyles(styles);

  const classes = useStyles();

  const schema = yup.object().shape({
    nameProduct: yup
      .string()
      .required("Not null")
      .trim("Not contain space character")
      .strict(true),
    typeCode: yup.string().required("Not null"),
    quantity: yup
      .number("Quantity has been a number")
      .min(1, "Quantity has been > 0")
      .integer("Quantity has been a integer")
      .required("Not null"),
    categoryCode: yup.string().required("Not null").trim().strict(true),
    prices: yup
      .number("Prices has been a number")
      .integer("Prices has been a integer")
      .min(1, "Prices has been > 0")
      .required("Not null")
      .strict(true),
    description: yup
      .string()
      .required("Not null")
      .trim("Not contain space character")
      .strict(true),
  });

  const [product, setProduct] = useState({
    nameProduct: "",
    prices: 0,
    quantity: 0,
    description: "",
    typeCode: "",
    categoryCode: "",
    imgUrl: ["", "", "", "", ""],
  });

  const [initialCategory, setInitialCategory] = useState([]);
  const [initialChildCategory, setInitialChildCategory] = useState([]);
  const [imgTemp, setImgTemp] = useState([null, null, null, null, null]);
  const [stt, setStt] = useState(true);
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openDialog, setOpenDialog] = useState({ open: false, message: "" });

  const accessToken = localStorage.getItem("accessToken") || "";

  const params = useParams();

  useEffect(() => {
    setOpen(true);
    APIs.getListCategory().then((resp) => {
      setOpen(false);
      setInitialCategory(resp.data.dataResponse.list);
    });
  }, []);

  useEffect(() => {
    if (params.id) {
      APIs.getProductById(params.id).then((resp) => {
        console.log(resp.data);
        setStt(true);
        setProduct(resp.data.dataResponse);
      });
    }
  }, [params.id]);

  useEffect(() => {
    if (initialCategory.length > 0 && product.typeCode != "") {
      const tempCategoryList = initialCategory.find(
        (item) => item.typeCode == product.typeCode
      );
      setInitialChildCategory(tempCategoryList.typeList);
    }
  }, [initialCategory.length]);

  const onHandleChange = (e) => {
    setStt(false);
    setProduct({ ...product, [e.name]: e.value });
  };

  const onHandleSubmit = async (values) => {
    if (params.id) {
      await onUpdProduct(values);
      // console.log("update");
    } else {
      await onAddProduct(values);
    }
  };

  const onAddProduct = async (values) => {
    if (imgTemp[0] == null) {
      return;
    }
    const imgUrl = await onHandleUploadImg(imgTemp[0]);

    if (values) {
      values.imgUrl[0] = imgUrl;
    }
    console.log(values.imgUrl);
    APIs.createProduct(values, accessToken)
      .then((resp) => {
        console.log(resp.message);
        setOpen(false);
        setOpenDialog({
          ...openDialog,
          open: true,
          message: resp.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onUpdProduct = async (values) => {
    // console.log(values);
    setOpen(true);
    for (let i = 0; i < imgTemp.length; i++) {
      const element = imgTemp[i];
      if (element !== null) {
        console.log(i);
        const imgUrl = await onHandleUploadImg(element);
        values.imgUrl.splice(i, 1, imgUrl);
      }
    }

    console.log(values);

    APIs.updProduct(params.id, accessToken, values).then((resp) => {
      setOpen(false);
      setOpenDialog({
        ...openDialog,
        open: true,
        message: resp.data.message,
      });
    });
  };

  const onHandleUploadImg = async (data) => {
    return new Promise((resolve, reject) => {
      setOpen(true);
      const uploadTask = storage.ref(`images/${data.name}`).put(data);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(data.name)
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            });
        }
      );
    });
  };

  const onChangeImg = (e, index) => {
    if (!e) {
      return;
    }
    const temp = imgTemp.slice();
    temp.splice(index, 1, e);
    console.log(temp);
    setImgTemp(temp);
  };

  const handleClose = () => {
    setOpenForm(false);
    setOpen(false);
    setOpenDialog({ ...openDialog, open: false });
  };

  const onChangeItem = (e) => {
    // setStt(false);
    console.log(e);
    if (e.target.name == "typeCode") {
      const tempCategoryList = initialCategory.find(
        (item) => item.typeCode == e.target.value
      );
      setInitialChildCategory(tempCategoryList.typeList);
    }
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpenForm(true);
  };

  const slideControl = () => {
    return (
      <p>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open max-width dialog
        </Button>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          open={openForm}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
          <DialogContent className={classes.slideContainer}>
            <ImgPicker
              index={1}
              onChangeImg={onChangeImg}
              curImgUrl={product.imgUrl[1]}
            />
            <ImgPicker
              index={2}
              onChangeImg={onChangeImg}
              curImgUrl={product.imgUrl[2]}
            />
            <ImgPicker
              index={3}
              onChangeImg={onChangeImg}
              curImgUrl={product.imgUrl[3]}
            />
            <ImgPicker
              index={4}
              onChangeImg={onChangeImg}
              curImgUrl={product.imgUrl[4]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="danger">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </p>
    );
  };

  return (
    <GridContainer>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Create new product</h4>
            <p className={classes.cardCategoryWhite}>
              Complete your information
            </p>
          </CardHeader>
          <CardBody>
            <Formik
              initialValues={product}
              enableReinitialize={stt}
              validationSchema={schema}
              onSubmit={(values) => {
                onHandleSubmit(values);
              }}
            >
              {() => {
                return (
                  <Form>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={4}>
                        <FastField
                          label="Name Product"
                          name="nameProduct"
                          id="name-product"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          component={CustomInput}
                          onHandleChange={onHandleChange}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <FastField
                          label="Prices"
                          name="prices"
                          type="number"
                          id="prices"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          component={CustomInput}
                          onHandleChange={onHandleChange}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <FastField
                          label="Quantity"
                          type="number"
                          name="quantity"
                          id="quantity"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          component={CustomInput}
                          onHandleChange={onHandleChange}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <Field
                          labelText="Type Product"
                          name="typeCode"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          initialCategory={initialCategory}
                          component={CustomSelect}
                          onChangeItem={onChangeItem}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <Field
                          labelText="Category Product"
                          name="categoryCode"
                          id="categoryName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          initialCategory={initialChildCategory}
                          component={CustomSelect}
                          onChangeItem={onChangeItem}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <FastField
                          label="Description"
                          name="description"
                          id="about-me"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          rows={5}
                          multiline={true}
                          component={CustomInput}
                          onHandleChange={onHandleChange}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <ImgPicker
                          name="imgUrl"
                          onChangeImg={onChangeImg}
                          curImgUrl={product.imgUrl[0]}
                          index={0}
                        />
                        {/* <FastField
                          name="imgUrl"
                          component={ImgPicker}
                          onChangeImg={onChangeImg}
                          curImgUrl={product.imgUrl[0]}
                          index={0}
                        /> */}
                      </GridItem>
                    </GridContainer>
                    <CardFooter>
                      <Button color="primary" type="submit">
                        Submit
                      </Button>
                    </CardFooter>
                  </Form>
                );
              }}
            </Formik>
          </CardBody>
        </Card>
      </GridItem>

      <Snackbar
        open={openDialog.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {openDialog.message}
        </Alert>
      </Snackbar>

      {product.id ? slideControl() : null}
    </GridContainer>
  );
}

export default ProductManager;
