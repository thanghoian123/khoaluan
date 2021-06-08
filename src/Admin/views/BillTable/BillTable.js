import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import MuiAlert from "@material-ui/lab/Alert";
import {
  Backdrop,
  Button,
  Card,
  CircularProgress,
  IconButton,
  Snackbar,
  Tooltip,
} from "@material-ui/core";
import CardHeader from "Admin/components/Card/CardHeader.js";
import CardBody from "Admin/components/Card/CardBody.js";
import * as APIs from "../../../asset/APIs/index.js";
import { Close, Edit } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/actions";
import { Pagination } from "@material-ui/lab";
import { Link } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const columns = [
  { id: "id", label: "id", minWidth: 50 },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "city",
    label: "City",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "totalBill",
    label: "Total Bill",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    align: "right",
  },
  {
    id: "option",
    label: "Option",
    minWidth: 100,
    align: "right",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

function Options(key, align, item, onDelData) {
  return (
    <TableCell key={key} align={align}>
      <Link to={`/admin/product-manager/${item.id}`}>
        <Tooltip
          id="tooltip-top"
          title="Edit Task"
          placement="top"
          arrow={true}
        >
          <IconButton aria-label="Edit">
            <Edit color="primary" fontSize="small" />
          </IconButton>
        </Tooltip>
      </Link>
      <Tooltip
        id="tooltip-top-start"
        title="Remove"
        placement="top"
        onClick={() => onDelData(item.id)}
      >
        <IconButton aria-label="Close">
          <Close color="secondary" fontSize="small" />
        </IconButton>
      </Tooltip>
    </TableCell>
  );
}

const accessToken = localStorage.getItem("accessToken") || "";

function BillTable() {
  const billList = useSelector((state) => state.billReducer);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(true);
  const [openDialog, setOpenDialog] = useState({
    open: false,
    message: "",
    error: false,
  });
  const itemPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  useEffect(() => {
    setOpen(true);
    APIs.getListBill(page, itemPerPage)
      .then(async (resp) => {
        console.log(resp.data);
        if (resp.data) {
          await dispatch(actions.getBills(resp.data.dataResponse.list));
          setOpen(false);
        }
      })
      .catch((err) => console.log(err));
  }, [page]);

  var onDelData = (id) => {
    setOpen(true);
    APIs.delProduct(id, accessToken).then((resp) => {
      if (resp.data.error == null) {
        setOpen(false);
        setOpenDialog({
          ...openDialog,
          open: true,
          message: resp.data.message,
        });
        dispatch(actions.delProduct(id));
      } else {
        setOpen(false);
        setOpenDialog({
          ...openDialog,
          error: true,
          open: true,
          message: resp.data.message,
        });
      }
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenDialog({ ...openDialog, open: false });
  };

  const onUpdStt = (id) => {
    console.log(id);
  };

  return (
    <GridContainer>
      <Backdrop
        className={classes.backdrop}
        open={open}
        style={{ zIndex: 100 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Product Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {billList.map((item, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = item[column.id];
                          if (column.id == "status") {
                            return (
                              <TableCell>
                                <Button
                                  onClick={() => onUpdStt(item.id)}
                                  variant="contained"
                                  color={
                                    item.billStatus === "PENDING"
                                      ? "default"
                                      : "secondary"
                                  }
                                >
                                  {item.billStatus}
                                </Button>
                              </TableCell>
                            );
                          }
                          if (column.id == "option") {
                            return Options(
                              column.id,
                              column.align,
                              item,
                              onDelData
                            );
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                  <TableRow></TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Pagination count={10} onChange={handleChangePage} />
          </CardBody>
        </Card>
      </GridItem>

      <Snackbar
        open={openDialog.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={openDialog.error ? "error" : "success"}
        >
          {openDialog.message}
        </Alert>
      </Snackbar>
    </GridContainer>
  );
}

export default BillTable;
