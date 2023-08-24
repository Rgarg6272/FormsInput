import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  closeIcon: {
    position: "absolute",
    cursor: "pointer",
    color: "#A71930",
    right: "25px",
  },

  typoHeaderContainer: {
    padding: "1rem 1rem 1rem 0rem",
  },
  typoHeader: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#000000",
  },
  paperDialog2: {
    position: "absolute",
    width: "90%",
    maxWidth: 300,
    height: "195px",
    maxHeight: "80vh",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "0px 30px 17px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  errorIconGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "10px",
  },
  errorIcon: {
    fontSize: "65px",
    color: "#A71930",
  },
  typoHeaderSearch: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "12px",
    color: "#000000",
  },
  buttonGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton2: {
    "&:hover": {
      background: "#fff",
    },
    backgroundColor: "#fff",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: 700,
    color: "black",
    borderRadius: 0,
    width: "20%",
    height: "28px",
    border: "1.5px solid #14837B",
    marginLeft: "10px",
  },
  closeButton3: {
    "&:hover": {
      background: "#14837B",
    },
    backgroundColor: "#14837B",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: 700,
    color: "#ffffff",
    borderRadius: 0,
    width: "20%",
    height: "28px",
  },
}));

const SearchDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleTable = () => {
    setOpen(false);
  };

  const searchBody = (
    <div className={classes.paperDialog2}>
      <>
        <Grid container className={classes.typoHeaderContainer}>
          <Grid item xs={12} style={{ textAlign: "right" }}>
            <CloseIcon className={classes.closeIcon} onClick={handleClose} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.errorIconGrid}>
            <ErrorOutlineIcon className={classes.errorIcon} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ paddingBottom: "5px" }}>
            <Typography variant="caption" className={classes.typoHeaderSearch}>
              Member already has a contact assigned.
            </Typography>
            <Typography variant="caption" className={classes.typoHeaderSearch}>
              Do you wish to deactivate the existing contact
            </Typography>
            <Typography variant="caption" className={classes.typoHeaderSearch}>
              and activate this instead?
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.buttonGrid}>
            <Button
              variant="contained"
              onClick={handleTable}
              className={classes.closeButton3}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              className={classes.closeButton2}
            >
              No
            </Button>
          </Grid>
        </Grid>
      </>
    </div>
  );

  return (
    <React.Fragment>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          {searchBody}
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default SearchDialog;
