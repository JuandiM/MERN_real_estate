import "./formBottom.scss";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FormBottom = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="section" id="contact">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>

      {/* <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p> */}
      <div className="formContact">
        <div className="row">
          <div className="col-lg-4 mb-lg-0 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="form-header blue accent-1">
                  <h3 className="mt-2">
                    <i className="fas fa-envelope"></i> Write to us:
                  </h3>
                </div>
                <p className="dark-grey-text">
                  We'll write rarely, but only the best content.
                </p>

                <div className="md-form">
                  <i className="fas fa-user prefix grey-text"></i>
                  <label for="form-name">Your name</label>
                  <input type="text" id="form-name" className="form-control" />
                </div>
                <div className="md-form">
                  <i className="fas fa-envelope prefix grey-text"></i>
                  <label for="form-email">Your email</label>
                  <input type="text" id="form-email" className="form-control" />
                </div>
                <div className="md-form">
                  <i className="fas fa-tag prefix grey-text"></i>
                  <label for="form-Subject">Subject</label>
                  <input
                    type="text"
                    id="form-Subject"
                    className="form-control"
                  />
                </div>
                <div className="md-form">
                  <i className="fas fa-pencil-alt prefix grey-text"></i>
                  <label for="form-text">Send message</label>
                  <textarea
                    id="form-text"
                    className="form-control md-textarea"
                    rows="3"
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="btn"
                    onClick={handleClickOpen}
                  >
                    Submit
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Contact form Info"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        This contact form is disabled. In case you want to
                        contact me, please drop me an email to
                        juandimena34@gmail.com Sorry for the inconvenience.
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div
              id="map-container-section"
              className="z-depth-1-half map-container-section mb-4"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Marbella&t=&z=11&ie=UTF8&iwloc=&output=embed"
                style={{ border: "0", frameBorder: "0" }}
                allowFullScreen
                title="googleMap"
              ></iframe>
            </div>

            <div className="row text-center">
              <div className="col-md-4">
                <i className="fas fa-map-marker-alt"></i>

                <p>Marbella, 29660</p>
                <p className="mb-md-0">Malaga (Spain)</p>
              </div>
              <div className="col-md-4">
                <i className="fas fa-phone"></i>

                <p>+ 34 955 95 95 95</p>
                <p className="mb-md-0">Mon - Fri, 8:00-18:00</p>
              </div>
              <div className="col-md-4">
                <i className="fas fa-envelope"></i>

                <p>info@example.com</p>
                <p className="mb-0">sale@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormBottom;
