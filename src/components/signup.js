import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const Signup = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handlesubmit = async (e) => {
    e.preventDefault();
    let name = e.target.Name.value.trim();
    let email = e.target.Email.value.trim();
    let password = e.target.Password.value.trim();
    let age = e.target.Age.value.trim();

    console.log({ name, email, password, age });
  };
  return (
    <div className="signup-form">
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
        <ModalBody>
          <form onSubmit={handlesubmit}>
            <div>
              <input
                type="text"
                placeholder="Name"
                name="Name"
                required
              ></input>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                required
              ></input>
            </div>
            <div>
              <input type="number" placeholder="Age" name="Age"></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="Password"
                required
              ></input>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Signup;
