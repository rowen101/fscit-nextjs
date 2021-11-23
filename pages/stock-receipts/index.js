import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Image from "next/image";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  gridmain: {
    marginTop: 10,
  },
  paper: {
    margin: 5,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 150,
    width: 110,
    bottom: 0,
    left: 0,
  },

  control: {
    padding: theme.spacing(2),
  },
}));

export default function index() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Typography color="textPrimary">Stock Receipts</Typography>
      </Breadcrumbs>
      <Grid item xs={12} className={classes.gridmain}>
        <Grid container justify="center" spacing={spacing}>
          <Grid item>
            <Link color="inherit" href="/stock-receipts/receive-shipments/">
              <Paper className={classes.paper}>
                <Image
                  src="/images/icons8-delivery-person-50.png"
                  alt="me"
                  width="50"
                  height="50"
                />
                Receive Shipments
              </Paper>
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" href="/stock-receipts/inventory-in/">
              <Paper className={classes.paper}>
                {" "}
                <Image
                  src="/images/flow_chart_50px.png"
                  alt="me"
                  width="50"
                  height="50"
                />
                Inventory IN
              </Paper>
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" href="/stock-receipts/batch-labeling/">
              <Paper className={classes.paper}>
                {" "}
                <Image
                  src="/images/new_document_50px.png"
                  alt="me"
                  width="50"
                  height="50"
                />
                Batch Labeling
              </Paper>
            </Link>
          </Grid>
          <Grid item>
            <Link
              color="inherit"
              href="/stock-receipts/batch-label-confirmation/"
            >
              <Paper className={classes.paper}>
                {" "}
                <Image
                  src="/images/new_document_50px.png"
                  alt="me"
                  width="50"
                  height="50"
                />
                Batch Label Confirmation
              </Paper>
            </Link>
          </Grid>
          <Grid item>
            <Link
              color="inherit"
              href="/stock-receipts/batch-label-cancellation/"
            >
              <Paper className={classes.paper}>
                {" "}
                <Image
                  src="/images/new_document_50px.png"
                  alt="me"
                  width="50"
                  height="50"
                />
                Batch Label Cancellation
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
