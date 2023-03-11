import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function SignIn() {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100 mt-0">
        <MDBCol col="12">
          <MDBCard
            className="bg-grey my-5 mx-auto"
            style={{
              borderRadius: "1rem",
              maxWidth: "500px",
              backgroundColor: "#eee",
            }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <div className="d-flex flex-row align-items-center justify-content-center ">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                <MDBBtn floating size="md" tag="a" className="me-2">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn floating size="md" tag="a" className="me-2">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn floating size="md" tag="a" className="me-2">
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>
              </div>
              <div className=" d-flex flex-row align-items-center justify-content-center">
                <p className="text-black fw-bold mx-2 mt-3 mb-3 text-center">Or</p>
              </div>
              {/* <h2 className="fw-bold mb-2 mx-2 text-center">Or</h2> */}
              <p className="text-black-50 mb-3">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                className="mb-4"
                label="Remember password"
              />

              <MDBBtn size="lg">Login</MDBBtn>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignIn;
