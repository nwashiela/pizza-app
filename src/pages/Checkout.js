import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Checkout() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); //model

  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    adress: "",
    paymentmethod: "",
    delivaryMethod: "",
    number: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (person.firstName && person.email && person.number && person.adress) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        firstName: "",
        email: "",
        adress: "",
        paymentmethod: "",
        delivaryMethod: "",
        number: "",
      });
    }
  };
  return (
    <div className="checkout">
      <h1> Checkout</h1>
      <>
        <p>PAYMENT</p>
      </>
      <form>
        <div className="checkout">
          <label>Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="checkout">
          <label>email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>

        <div className="adress">
          <label>Adress:</label>
          <input
            type="text"
            id="adress"
            name="adress"
            value={person.adress}
            onChange={handleChange}
          />
        </div>

        <div className="paymentmethod"></div>

        <div className="delivaryMethod"></div>

        <div className="checkout">
          <label>Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={person.number}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" onClick={handleSubmit}>
          <div onClick={handleOpen}>submit details</div>
        </Button>
      </form>
      {people.map((person, index) => {
        const { id, firstName, email, number } = person;
        return (
          <div key={id}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  PLEASE CONFIRM YOUR DETAILS
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {firstName}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {email}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {number}
                </Typography>

                <Stack spacing={2} direction="row">
                  <Button variant="contained">BACK</Button>
                  <Button variant="contained">CONFIRM</Button>
                  
                </Stack>
              </Box>
            </Modal>
          </div>
        );
      })}
    </div>
  );
}

export default Checkout;
