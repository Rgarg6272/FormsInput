import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import TableDialog from "./TableDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "5px",
      width: "25ch",
    },
  },
  customInput: {
    padding: "10px 12px",
  },
  customLabel: {
    transform: "translate(14px, -6px) scale(0.75)",
  },
  customToolbar: {
    "& .MTableToolbar-root-5": {
      minHeight: "0px !important",
    },
  },
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
}));

const DelegatedDialog = ({
  handleCloseDialog,
  handleReplaceClick,
  dialogSelectedRow,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  //const [selectedRow, setSelectedRow] = useState(null);

  const [searchDialogOpen, setSearchDialogOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    handleCloseDialog();
  };

  const handleOpenTableDialog = () => {
    console.log("Hey MF");
    setSearchDialogOpen(true);
    setOpen(false);
  };

  const assignContact = (
    <>
      <Grid container>
        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
          <DialogContent style={{ paddingTop: 0 }}>
            <Grid container className={classes.typoHeaderContainer}>
              <Grid item xs={8}>
                <Typography className={classes.typoHeader}>
                  Assign Delegated Contact
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <CloseIcon
                  className={classes.closeIcon}
                  onClick={handleClose}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Subscriber ID"
                    variant="outlined"
                    InputProps={{
                      classes: { input: classes.customInput },
                    }}
                    InputLabelProps={{
                      classes: { outlined: classes.customLabel },
                      shrink: true,
                    }}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{
                      borderRadius: 0,
                      textTransform: "capitalize",
                    }}
                    onClick={handleOpenTableDialog}
                  >
                    Search Contact
                  </Button>
                </form>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </>
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
          {assignContact}
        </Modal>
        {searchDialogOpen && <TableDialog />}
      </div>
    </React.Fragment>
  );
};

export default DelegatedDialog;
