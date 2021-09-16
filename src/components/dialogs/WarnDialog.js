import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function WarnDialog({ handleClose }) {
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Type correct country name !!!"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default WarnDialog;
