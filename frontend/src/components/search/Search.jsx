import React, { useState } from "react";
import "./search.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Search = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="search">
      <div className="top">
        <div className="textContainer">
          <div>
            <h1>Luxury Villas & Apartments</h1>
          </div>
          <div>
            <p className="paragraph">
              We have a wide range porftolio of
              <span> luxury villas & apartments</span> just a stone through the
              beach. Find the finest selection of
              <span> modern villas with sea views.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="formContainer">
          <form action="">
            <input
              className="formInput"
              type="text"
              placeholder="Enter Ref"
            ></input>
            <select name="select" className="formInput">
              <option value="value1">Any area</option>
              <option value="value1">Casares</option>
              <option value="value1">Estepona</option>
              <option value="value1">Marbella</option>
            </select>
            <select name="select" className="formInput">
              <option value="value1">Any type</option>
              <option value="value1">Villa</option>
              <option value="value1">Apartment</option>
              <option value="value1">Penthouse</option>
            </select>
            <select name="select" className="formInput">
              <option value="value1">Any Price</option>
              <option value="value1">Up to €750,000</option>
              <option value="value1">Up to €1,500,000</option>
              <option value="value1">Up to €2,500,000</option>
              <option value="value1">More than €2,500,000</option>
            </select>
            <Button className="btn" onClick={handleClickOpen}>
              Search
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Search box Info"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  This search-box is under construction. It will be working on
                  the following project updates. Sorry for the inconvenience.
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
